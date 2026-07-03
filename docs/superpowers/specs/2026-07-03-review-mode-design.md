# Review Mode + Candidate Batch Design

**Date:** 2026-07-03
**Status:** Approved

## Goal

Extend `editor.html` with a **Review mode**: a rating flow for a batch of ~120 new AI-written funny answers ("candidates"). Candidates are shown one at a time as a random prompt+candidate combo. Ratings decide which candidates get saved into `cards.js` and which pairings get blocked. The flow must work well on a phone (GitHub Pages + sofa), including a clipboard-based export.

## Rating semantics

| Rating | Effect |
|---|---|
| 😂 Funny | Candidate **approved** — saved on export |
| 👍 OK | Candidate **approved** — saved on export |
| 🔧 Doesn't work | This prompt+candidate **pair blocked**; candidate stays in play elsewhere |
| 😐 Not funny | Candidate **killed** — no more combos shown, not exported. Exception: if already approved on another prompt, it stays approved and only this pair is blocked |

Unreviewed pairs are allowed by default: one approval saves the candidate globally; only explicit "doesn't work" ratings create per-prompt skips.

## Candidates

- Embedded in `editor.html` as a `CANDIDATES` array: `{ id, mood, type, en, sv:"" }`
- Stable string ids (`"c-001"`, `"c-002"`, …) so future batches append without disturbing old ratings
- Batch composition (~120): ~50 fun, ~30 mix, ~25 funny-spicy, ~15 wry-deep, spread across all four grammar lanes (np/gp/qf/ap)
- English only; Swedish translated later (matches existing spec's approach)
- New batches later = ask Claude to append to the array; localStorage ratings key on candidate id, so old candidates are never re-shown

## Combo generation

A combo is valid when:
1. `prompt.accepts` includes `candidate.type`, and
2. moods are game-compatible: `candidate.mood === prompt.mood`, or either is `"mix"` (mirrors `initHandMode`'s dealing filter in `index.html`)

Queue rules:
- Never show a rated pair again; never show combos for killed candidates
- Prioritize candidates with **no rating yet** — every candidate is seen once before second combos appear
- Random order within each priority tier
- Progress line: "approved N · killed N · unseen N"

## UI

Top bar gains a mode toggle: **Browse** (existing editor, unchanged) | **Review**.

Review mode, mobile-first:
- Combo card centered: prompt with the candidate filled into the blank (names substituted, candidate bolded), plus mood badge and type label
- Fixed bottom row of four big tap-target buttons: 😂 Funny · 👍 OK · 🔧 Doesn't work · 😐 Not funny
- Desktop keyboard shortcuts: 1–4 in the same order
- Progress line above or below the card
- "Done" state when the queue is exhausted

## State (localStorage)

Same key as the editor (`after-hours-editor-state`), extended:

```json
{
  "currentIdx": 2,
  "skips": { "2": [5, 11] },
  "newAnswers": [],
  "ratings": { "c-042|17": "funny", "c-007|3": "notfunny" },
  "candidateStatus": { "c-042": "approved", "c-007": "killed" }
}
```

- `ratings` keys are `candidateId|promptIdx`
- `candidateStatus` is derived from ratings but cached for cheap queue building; values: `"approved"` | `"killed"` (absent = unseen/undecided)
- Loading merges missing fields with defaults so existing saved state keeps working

## Export

Extends the existing `exportCards()`:
1. Approved candidates (status `"approved"`) are appended to `ANSWERS` after `state.newAnswers`, as `{ mood, type, en, sv:"" }` (id dropped)
2. Each "doesn't work" / "not funny" rating on an **approved** candidate becomes an entry in that prompt's `skip` array, using the candidate's final index in the exported `ANSWERS`
3. Killed candidates are omitted entirely
4. New **Copy cards.js** button next to the download button — same generated text to `navigator.clipboard.writeText`, with a "copied ✓" confirmation. Phone workflow: copy → paste into GitHub web editor on `cards.js` → commit

## Out of scope

- Swedish translations of candidates
- Editing candidate text during review (kill it; a better version goes in the next batch)
- Changes to `index.html` or `eval.html` (game already respects `prompt.skip`)
- Syncing state between devices (export is the transport)
