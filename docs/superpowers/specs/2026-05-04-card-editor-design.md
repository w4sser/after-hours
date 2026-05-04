# Card Editor Design

**Date:** 2026-05-04  
**Status:** Approved

## Goal

A browser-based editor (`editor.html`) for reviewing and improving After Hours answer cards prompt by prompt. The workflow: go through all 64 prompts in sequence, see every compatible answer rendered as a full sentence, skip answers that don't work grammatically or aren't funny enough, and add new ones. Skips are per-prompt (not global). New answers become available to all prompts that accept the same grammar type.

## Architecture

Standalone HTML file alongside `index.html` and `eval.html`. Embeds the same card data (copy of `cards.js` inline, like `eval.html` does). All editor state (skips, new answers) lives in `localStorage` so progress survives page refreshes. Export generates a fresh `cards.js` to download.

The game file `index.html` needs a small update to respect per-prompt skips when dealing.

## Data Model

### Per-prompt skips
Each prompt gets an optional `skip` array listing answer indices to exclude:
```js
{ mood:"fun", accepts:["np","gp"], skip:[3,17], en:"...", sv:"..." }
```
The game's dealing logic filters out `ANSWERS[i]` where `prompt.skip.includes(i)`.

### New answers
Added to the global `ANSWERS` array. `sv` is left empty (to be translated later). `mood` auto-inherits from the current prompt. `type` is set by the user from the friendly-name dropdown.

Type mapping (internal → UI label):
- `np` → Thing
- `gp` → Activity  
- `qf` → Quote
- `ap` → Description

## Components

### Top bar
- Prompt counter: "PROMPT 3 / 64"
- Mood badge (FUN / DEEP / SPICY / MIX)
- Accepted types in plain English: "accepts: **Things** · **Activities**"
- Name inputs: Robert & Jannika (editable, defaults; used to substitute `{p1}` / `{p2}` in preview)
- Prev / Next buttons (wrap around at ends)

### Prompt display
Full prompt text with `___` rendered as a highlighted blank. Names substituted.

### Answer list
All answers compatible with this prompt (matching type, not in `skip`), plus any skipped ones shown dimmed at the end. Each row:
- Full rendered sentence: "...would include **Jannika refusing to pick a restaurant**" (names substituted)
- Type label in plain English (Thing / Activity / Quote / Description)
- "Skip here" button → adds answer index to this prompt's skip list
- Skipped rows: dim + strikethrough + "skipped for this prompt" label + "Restore" button
- Newly added answers: faint highlight + "new · also in N other prompts" note

### Add answer panel
- EN text input (single field, no Swedish)
- Type dropdown: Thing / Activity / Quote / Description
- Add button (also fires on Enter)
- Info note: "Mood auto-set from current prompt (fun). Will appear in all prompts accepting this answer type."

### Footer
- Status: "Skips are per-prompt · progress saved in browser"
- Export cards.js button

## State (localStorage)

Key: `after-hours-editor-state`

```json
{
  "currentPromptIdx": 2,
  "skips": { "2": [5, 11], "7": [3] },
  "newAnswers": [
    { "mood": "fun", "type": "np", "en": "Robert's emergency lasagna", "sv": "" }
  ]
}
```

On load: merge state with embedded card data. On export: bake skips into prompt objects, append new answers, generate `cards.js`.

## index.html changes

In the dealing logic, track global indices before filtering, then apply skips:
```js
var skip = prompt.skip || [];
// Build pool with original ANSWERS indices preserved
var pool = ANSWERS
  .map(function(a, i) { return { answer: a, idx: i }; })
  .filter(function(obj) {
    return prompt.accepts.indexOf(obj.answer.type) !== -1 &&
           skip.indexOf(obj.idx) === -1;
  });
```

`skip` stores indices into the full `ANSWERS` array, so filtering must happen before any subsetting. `{p1}` = first name input (Robert), `{p2}` = second name input (Jannika), matching eval.html's convention.

## Out of scope

- Swedish translation of new answers (done later)
- AI-generated answer suggestions (phase 2)
- Editing existing answer text (eval.html already handles this)
- Editing prompts
