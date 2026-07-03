# Review Mode + Candidate Batch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Review mode to `editor.html` that deals random prompt+candidate combos from a batch of 120 new funny answers, records funny/ok/doesn't-work/not-funny ratings, and exports approved answers (with per-prompt skips) into `cards.js` — downloadable or copyable to clipboard.

**Architecture:** Everything lives in the existing single-file `editor.html`. A `CANDIDATES` array holds the new answers with stable ids. localStorage state gains `ratings` (per pair) and `candidateStatus` (approved/killed). A mode toggle switches between the existing Browse UI and a new mobile-first Review UI. Export merges approved candidates into `ANSWERS` and bakes bad pairings into `prompt.skip`.

**Tech Stack:** Plain HTML/CSS/JS (ES5 style, matching the file). No build, no framework. Verification is manual in a browser — the project has no test infrastructure and a visual card game is best checked by driving the UI. Spec: `docs/superpowers/specs/2026-07-03-review-mode-design.md`.

---

### Task 1: Baseline commit

`editor.html` is untracked and `eval.html` has uncommitted changes. Commit them first so every later diff is readable.

**Files:**
- Commit: `editor.html`, `eval.html`

- [ ] **Step 1: Commit the baseline**

```bash
git add editor.html eval.html
git commit -m "Add card editor baseline and eval.html fixes"
```

---

### Task 2: CANDIDATES array + state extensions

**Files:**
- Modify: `editor.html` — after the `ANSWERS` array (ends near line 513), and `loadState()` (~line 521)

- [ ] **Step 1: Insert the CANDIDATES array right after the `ANSWERS` array**

Insert after the closing `];` of `ANSWERS`:

```js
// New AI-written answer candidates, rated in Review mode.
// Stable ids: future batches continue numbering (c-121, ...). Never renumber.
var CANDIDATES = [
  // ── FUN · things (np) ──
  { id:"c-001", mood:"fun", type:"np", en:"a laminated list of grievances", sv:"" },
  { id:"c-002", mood:"fun", type:"np", en:"an emotional support shopping cart", sv:"" },
  { id:"c-003", mood:"fun", type:"np", en:"a PowerPoint titled 'Why We Should Get a Dog'", sv:"" },
  { id:"c-004", mood:"fun", type:"np", en:"the vacation spreadsheet with 14 tabs", sv:"" },
  { id:"c-005", mood:"fun", type:"np", en:"a candle that costs more than the electric bill", sv:"" },
  { id:"c-006", mood:"fun", type:"np", en:"the good scissors, missing since 2019", sv:"" },
  { id:"c-007", mood:"fun", type:"np", en:"the emergency snack drawer", sv:"" },
  { id:"c-008", mood:"fun", type:"np", en:"a conspiracy theory about the neighbors' recycling", sv:"" },
  { id:"c-009", mood:"fun", type:"np", en:"the phrase 'we should host more'", sv:"" },
  { id:"c-010", mood:"fun", type:"np", en:"a receipt hidden like a state secret", sv:"" },
  { id:"c-011", mood:"fun", type:"np", en:"two competing weather apps", sv:"" },
  { id:"c-012", mood:"fun", type:"np", en:"a betrayal involving the last of the oat milk", sv:"" },
  { id:"c-013", mood:"fun", type:"np", en:"the 'quick stop' that lasted three hours", sv:"" },
  { id:"c-014", mood:"fun", type:"np", en:"a fitted sheet and two broken spirits", sv:"" },
  { id:"c-015", mood:"fun", type:"np", en:"the seventh 'last episode' of the night", sv:"" },
  { id:"c-016", mood:"fun", type:"np", en:"a vendetta against the self-checkout machine", sv:"" },
  { id:"c-017", mood:"fun", type:"np", en:"the fourth attempt at sourdough", sv:"" },
  { id:"c-018", mood:"fun", type:"np", en:"an argument neither of us remembers starting", sv:"" },
  { id:"c-019", mood:"fun", type:"np", en:"a decorative towel nobody is allowed to use", sv:"" },
  { id:"c-020", mood:"fun", type:"np", en:"the world's most passive-aggressive calendar invite", sv:"" },
  { id:"c-021", mood:"fun", type:"np", en:"a nap that was supposed to be twenty minutes", sv:"" },
  { id:"c-022", mood:"fun", type:"np", en:"the 'we'll eat it before it goes bad' produce drawer", sv:"" },
  // ── FUN · activities (gp) ──
  { id:"c-023", mood:"fun", type:"gp", en:"rating other couples' arguments at restaurants", sv:"" },
  { id:"c-024", mood:"fun", type:"gp", en:"practicing fake laughs for the work party", sv:"" },
  { id:"c-025", mood:"fun", type:"gp", en:"arguing about the plot of a movie neither of us finished", sv:"" },
  { id:"c-026", mood:"fun", type:"gp", en:"{p1} explaining the offside rule with condiments", sv:"" },
  { id:"c-027", mood:"fun", type:"gp", en:"executing a synchronized Irish exit", sv:"" },
  { id:"c-028", mood:"fun", type:"gp", en:"getting emotionally attached to the robot vacuum", sv:"" },
  { id:"c-029", mood:"fun", type:"gp", en:"whispering 'we're leaving in five minutes' for two hours", sv:"" },
  { id:"c-030", mood:"fun", type:"gp", en:"hyping each other up to make one (1) phone call", sv:"" },
  { id:"c-031", mood:"fun", type:"gp", en:"confidently checking the oil like we know things", sv:"" },
  { id:"c-032", mood:"fun", type:"gp", en:"starting a diet in the morning and folding by lunch", sv:"" },
  { id:"c-033", mood:"fun", type:"gp", en:"narrating the dog's inner monologue", sv:"" },
  { id:"c-034", mood:"fun", type:"gp", en:"{p2} reorganizing the fridge mid-argument", sv:"" },
  { id:"c-035", mood:"fun", type:"gp", en:"googling 'is it normal to...' and immediately closing the tab", sv:"" },
  { id:"c-036", mood:"fun", type:"gp", en:"reading one-star reviews of places we love, out loud", sv:"" },
  // ── FUN · quotes (qf) ──
  { id:"c-037", mood:"fun", type:"qf", en:"I know a shortcut", sv:"" },
  { id:"c-038", mood:"fun", type:"qf", en:"we're never drinking again", sv:"" },
  { id:"c-039", mood:"fun", type:"qf", en:"don't make it weird", sv:"" },
  { id:"c-040", mood:"fun", type:"qf", en:"this is why we can't have nice things", sv:"" },
  { id:"c-041", mood:"fun", type:"qf", en:"I'm just resting my eyes", sv:"" },
  { id:"c-042", mood:"fun", type:"qf", en:"define 'expensive'", sv:"" },
  { id:"c-043", mood:"fun", type:"qf", en:"the parking was free though", sv:"" },
  { id:"c-044", mood:"fun", type:"qf", en:"I've been saying that for years", sv:"" },
  // ── FUN · descriptions (ap) ──
  { id:"c-045", mood:"fun", type:"ap", en:"aggressively punctual", sv:"" },
  { id:"c-046", mood:"fun", type:"ap", en:"politely furious", sv:"" },
  { id:"c-047", mood:"fun", type:"ap", en:"two espressos past reasonable", sv:"" },
  { id:"c-048", mood:"fun", type:"ap", en:"financially optimistic", sv:"" },
  { id:"c-049", mood:"fun", type:"ap", en:"wrong at full volume", sv:"" },
  { id:"c-050", mood:"fun", type:"ap", en:"athletically lazy", sv:"" },
  // ── MIX · things (np) ──
  { id:"c-051", mood:"mix", type:"np", en:"the last slice, cut into two suspiciously unequal halves", sv:"" },
  { id:"c-052", mood:"mix", type:"np", en:"a six-second slow dance in the parking lot", sv:"" },
  { id:"c-053", mood:"mix", type:"np", en:"matching hangovers", sv:"" },
  { id:"c-054", mood:"mix", type:"np", en:"a shared calendar neither of us checks", sv:"" },
  { id:"c-055", mood:"mix", type:"np", en:"breakfast for dinner and zero regrets", sv:"" },
  { id:"c-056", mood:"mix", type:"np", en:"the same story, told with two very different villains", sv:"" },
  { id:"c-057", mood:"mix", type:"np", en:"an anniversary we both pretended not to forget", sv:"" },
  { id:"c-058", mood:"mix", type:"np", en:"the couch dent shaped like us", sv:"" },
  { id:"c-059", mood:"mix", type:"np", en:"a secret handshake we're too old for", sv:"" },
  { id:"c-060", mood:"mix", type:"np", en:"the blanket fort that took two hours and one argument", sv:"" },
  { id:"c-061", mood:"mix", type:"np", en:"a plan B that was always the real plan", sv:"" },
  { id:"c-062", mood:"mix", type:"np", en:"the 'you hang up first' standoff, ten years in", sv:"" },
  // ── MIX · activities (gp) ──
  { id:"c-063", mood:"mix", type:"gp", en:"cancelling plans and celebrating like we won something", sv:"" },
  { id:"c-064", mood:"mix", type:"gp", en:"planning a whole future in the cereal aisle", sv:"" },
  { id:"c-065", mood:"mix", type:"gp", en:"sending memes instead of apologizing", sv:"" },
  { id:"c-066", mood:"mix", type:"gp", en:"re-telling the same story and tag-teaming the punchline", sv:"" },
  { id:"c-067", mood:"mix", type:"gp", en:"judging house-hunting shows like we own property", sv:"" },
  { id:"c-068", mood:"mix", type:"gp", en:"walking the long way home on purpose", sv:"" },
  { id:"c-069", mood:"mix", type:"gp", en:"staging interventions for each other's online shopping", sv:"" },
  { id:"c-070", mood:"mix", type:"gp", en:"slow-blinking at each other like house cats", sv:"" },
  // ── MIX · quotes (qf) ──
  { id:"c-071", mood:"mix", type:"qf", en:"one of us has to be the adult and it's not me", sv:"" },
  { id:"c-072", mood:"mix", type:"qf", en:"same time tomorrow?", sv:"" },
  { id:"c-073", mood:"mix", type:"qf", en:"you're lucky you're cute", sv:"" },
  { id:"c-074", mood:"mix", type:"qf", en:"it's us versus the instructions", sv:"" },
  { id:"c-075", mood:"mix", type:"qf", en:"we'll sleep when we're dead", sv:"" },
  // ── MIX · descriptions (ap) ──
  { id:"c-076", mood:"mix", type:"ap", en:"annoyingly each other's favorite", sv:"" },
  { id:"c-077", mood:"mix", type:"ap", en:"co-dependent in a fun way", sv:"" },
  { id:"c-078", mood:"mix", type:"ap", en:"unsupervised and thriving", sv:"" },
  { id:"c-079", mood:"mix", type:"ap", en:"fluent in eyebrow", sv:"" },
  { id:"c-080", mood:"mix", type:"ap", en:"dramatic about soup", sv:"" },
  // ── SPICY · things (np) ──
  { id:"c-081", mood:"spicy", type:"np", en:"a bathrobe worn as a threat", sv:"" },
  { id:"c-082", mood:"spicy", type:"np", en:"the ten minutes before the guests arrived", sv:"" },
  { id:"c-083", mood:"spicy", type:"np", en:"a very specific playlist titled 'chores'", sv:"" },
  { id:"c-084", mood:"spicy", type:"np", en:"the good perfume on a random Tuesday", sv:"" },
  { id:"c-085", mood:"spicy", type:"np", en:"a countdown that started at dinner", sv:"" },
  { id:"c-086", mood:"spicy", type:"np", en:"one raised eyebrow from across the party", sv:"" },
  { id:"c-087", mood:"spicy", type:"np", en:"the laundry that stayed unfolded for a reason", sv:"" },
  { id:"c-088", mood:"spicy", type:"np", en:"a 'work from home' day with air quotes", sv:"" },
  { id:"c-089", mood:"spicy", type:"np", en:"the hotel key card held up without a word", sv:"" },
  // ── SPICY · activities (gp) ──
  { id:"c-090", mood:"spicy", type:"gp", en:"turning 'help me with this zipper' into a whole event", sv:"" },
  { id:"c-091", mood:"spicy", type:"gp", en:"taking the scenic route to bed", sv:"" },
  { id:"c-092", mood:"spicy", type:"gp", en:"losing at strip poker on purpose", sv:"" },
  { id:"c-093", mood:"spicy", type:"gp", en:"answering the door slightly too composed", sv:"" },
  { id:"c-094", mood:"spicy", type:"gp", en:"calling it an early night at 8pm with witnesses", sv:"" },
  { id:"c-095", mood:"spicy", type:"gp", en:"making 'getting ready' take twice as long together", sv:"" },
  { id:"c-096", mood:"spicy", type:"gp", en:"testing whether the new couch was a good investment", sv:"" },
  { id:"c-097", mood:"spicy", type:"gp", en:"reappearing from the bathroom in the other one's shirt", sv:"" },
  // ── SPICY · quotes (qf) ──
  { id:"c-098", mood:"spicy", type:"qf", en:"the meeting ran long, I swear", sv:"" },
  { id:"c-099", mood:"spicy", type:"qf", en:"wear the thing", sv:"" },
  { id:"c-100", mood:"spicy", type:"qf", en:"we can be a little late", sv:"" },
  { id:"c-101", mood:"spicy", type:"qf", en:"shhh, the walls are thin", sv:"" },
  { id:"c-102", mood:"spicy", type:"qf", en:"breakfast can wait", sv:"" },
  // ── SPICY · descriptions (ap) ──
  { id:"c-103", mood:"spicy", type:"ap", en:"criminally distracting in sweatpants", sv:"" },
  { id:"c-104", mood:"spicy", type:"ap", en:"suspiciously well-rested", sv:"" },
  { id:"c-105", mood:"spicy", type:"ap", en:"unfairly kissable before coffee", sv:"" },
  // ── DEEP · things (np) ──
  { id:"c-106", mood:"deep", type:"np", en:"the pep talk in the car before family dinner", sv:"" },
  { id:"c-107", mood:"deep", type:"np", en:"the nod that means 'we're leaving in ten'", sv:"" },
  { id:"c-108", mood:"deep", type:"np", en:"the grudge we gave a retirement party", sv:"" },
  { id:"c-109", mood:"deep", type:"np", en:"the world's smallest apology that fixed everything", sv:"" },
  { id:"c-110", mood:"deep", type:"np", en:"the eight-second hug that fixed a whole Tuesday", sv:"" },
  { id:"c-111", mood:"deep", type:"np", en:"a therapy breakthrough in a parking garage", sv:"" },
  { id:"c-112", mood:"deep", type:"np", en:"the joke that saved the worst day of the year", sv:"" },
  { id:"c-113", mood:"deep", type:"np", en:"your laugh in a room full of strangers", sv:"" },
  // ── DEEP · activities (gp) ──
  { id:"c-114", mood:"deep", type:"gp", en:"apologizing with snacks because words are hard", sv:"" },
  { id:"c-115", mood:"deep", type:"gp", en:"keeping each other's secrets like a tiny two-person cult", sv:"" },
  { id:"c-116", mood:"deep", type:"gp", en:"learning to fight fair on the twelfth try", sv:"" },
  { id:"c-117", mood:"deep", type:"gp", en:"loving the 7am version of each other anyway", sv:"" },
  // ── DEEP · quotes (qf) ──
  { id:"c-118", mood:"deep", type:"qf", en:"stay anyway", sv:"" },
  { id:"c-119", mood:"deep", type:"qf", en:"we figured it out, didn't we", sv:"" },
  // ── DEEP · descriptions (ap) ──
  { id:"c-120", mood:"deep", type:"ap", en:"softer than we admit in public", sv:"" }
];
```

- [ ] **Step 2: Extend default state and `loadState()` merging**

Replace:

```js
var state = { currentIdx: 0, skips: {}, newAnswers: [] };

function loadState() {
  try {
    var saved = localStorage.getItem(STATE_KEY);
    if (saved) state = JSON.parse(saved);
  } catch(e) {}
}
```

with:

```js
var state = { currentIdx: 0, skips: {}, newAnswers: [], ratings: {}, candidateStatus: {}, mode: 'browse' };

function loadState() {
  try {
    var saved = localStorage.getItem(STATE_KEY);
    if (saved) state = JSON.parse(saved);
  } catch(e) {}
  if (!state.skips) state.skips = {};
  if (!state.newAnswers) state.newAnswers = [];
  if (!state.ratings) state.ratings = {};
  if (!state.candidateStatus) state.candidateStatus = {};
  if (!state.mode) state.mode = 'browse';
}
```

- [ ] **Step 3: Verify nothing broke**

Open `editor.html` in a browser (existing localStorage state from earlier sessions must still load). Expected: Browse view renders exactly as before; DevTools console shows no errors; `CANDIDATES.length` in the console prints `120`.

- [ ] **Step 4: Commit**

```bash
git add editor.html
git commit -m "Add 120 answer candidates and extend editor state for ratings"
```

---

### Task 3: Mode toggle (Browse | Review)

**Files:**
- Modify: `editor.html` — top bar HTML (~line 205), CSS block, script

- [ ] **Step 1: Add tab styles to the CSS block (after the `.btn-nav` rules)**

```css
#mode-tabs { display: flex; gap: 4px; margin-right: 12px; }
.tab {
  background: transparent;
  border: 1px solid rgba(237,224,200,0.15);
  color: #9A8E7E;
  padding: 5px 14px;
  border-radius: 6px;
  font-size: 12px;
  transition: border-color 0.15s;
}
.tab:hover { border-color: rgba(237,224,200,0.3); }
.tab.active { background: #EDE0C8; color: #111; border-color: #EDE0C8; font-weight: 600; }
```

- [ ] **Step 2: Add the tabs as the first child of `#topbar`**

```html
<div id="mode-tabs">
  <button class="tab active" id="tab-browse" onclick="setMode('browse')">Browse</button>
  <button class="tab" id="tab-review" onclick="setMode('review')">Review</button>
</div>
```

- [ ] **Step 3: Add `setMode()` to the script and use it at startup**

Add before the final `loadState(); render();` lines:

```js
function setMode(m) {
  state.mode = m;
  saveState();
  var isReview = m === 'review';
  document.getElementById('tab-browse').className = 'tab' + (isReview ? '' : ' active');
  document.getElementById('tab-review').className = 'tab' + (isReview ? ' active' : '');
  ['prompt-meta', 'nav-btns', 'prompt-area', 'answers-area', 'add-panel'].forEach(function(id) {
    document.getElementById(id).style.display = isReview ? 'none' : '';
  });
  document.getElementById('review-area').style.display = isReview ? 'flex' : 'none';
  if (isReview) renderReview();
  else render();
}
```

Replace the bootstrap at the bottom:

```js
loadState();
render();
```

with:

```js
loadState();
setMode(state.mode);
```

(`renderReview` arrives in Task 4; until then keep `state.mode` at `'browse'` — don't click the Review tab yet, or stub `function renderReview(){}` temporarily and remove the stub in Task 4.)

- [ ] **Step 4: Add the (empty for now) review area HTML between `#answers-area` and `#add-panel`**

```html
<div id="review-area" style="display:none;"></div>
```

- [ ] **Step 5: Verify**

Reload `editor.html`. Expected: tabs render top-left; Browse is active; Browse view unchanged. (Review tab is wired but renders an empty area until Task 4.)

- [ ] **Step 6: Commit**

```bash
git add editor.html
git commit -m "Add Browse/Review mode toggle to editor"
```

---

### Task 4: Review engine + review UI

**Files:**
- Modify: `editor.html` — `#review-area` HTML from Task 3, CSS block, script

- [ ] **Step 1: Replace the empty `#review-area` with the full review UI**

```html
<div id="review-area" style="display:none;">
  <div id="review-progress"></div>
  <div id="review-card">
    <div id="review-meta">
      <span id="review-mood"></span>
      <span id="review-type"></span>
    </div>
    <div id="review-sentence"></div>
  </div>
  <div id="review-done" style="display:none;">All combos reviewed 🎉<br>Export cards.js to save your keepers.</div>
  <div id="review-buttons">
    <button class="rate-btn" onclick="rateCombo('funny')">😂 Funny<span class="key-hint">1</span></button>
    <button class="rate-btn" onclick="rateCombo('ok')">👍 OK<span class="key-hint">2</span></button>
    <button class="rate-btn" onclick="rateCombo('doesntwork')">🔧 Doesn't work<span class="key-hint">3</span></button>
    <button class="rate-btn" onclick="rateCombo('notfunny')">😐 Not funny<span class="key-hint">4</span></button>
  </div>
</div>
```

- [ ] **Step 2: Add review CSS (after the add-panel rules)**

```css
/* REVIEW MODE */
#review-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  gap: 16px;
  overflow-y: auto;
}
#review-progress {
  font-size: 12px;
  color: #9A8E7E;
  text-align: center;
  font-variant-numeric: tabular-nums;
}
#review-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1A1917;
  border: 1px solid rgba(237,224,200,0.1);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  gap: 14px;
  min-height: 0;
}
#review-meta { display: flex; gap: 8px; }
#review-mood {
  background: rgba(237,224,200,0.08);
  color: #9A8E7E;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  letter-spacing: 1px;
}
#review-type { font-size: 10px; color: #6B5F52; padding: 2px 0; letter-spacing: 1px; }
#review-sentence { font-size: 19px; line-height: 1.6; color: #EDE0C8; max-width: 560px; }
#review-sentence strong { color: #F5EDD8; }
#review-done { text-align: center; color: #9A8E7E; font-size: 15px; line-height: 1.8; padding: 40px 0; }
#review-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  flex-shrink: 0;
}
.rate-btn {
  background: #1A1917;
  border: 1px solid rgba(237,224,200,0.15);
  color: #EDE0C8;
  padding: 16px 8px;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  transition: border-color 0.15s;
}
.rate-btn:hover { border-color: rgba(237,224,200,0.35); }
.key-hint { font-size: 10px; color: #6B5F52; }
@media (max-width: 600px) {
  #review-buttons { grid-template-columns: 1fr 1fr; }
  .rate-btn { padding: 18px 8px; }
  .key-hint { display: none; }
  #review-sentence { font-size: 17px; }
}
```

- [ ] **Step 3: Add the review engine to the script (before `setMode`); remove any Task 3 stub**

```js
var currentCombo = null;

function moodCompatible(a, b) {
  return a === b || a === 'mix' || b === 'mix';
}

function candidateRatedMap() {
  var m = {};
  Object.keys(state.ratings).forEach(function(k) { m[k.split('|')[0]] = true; });
  return m;
}

function unratedCombos() {
  var out = [];
  CANDIDATES.forEach(function(c) {
    if (state.candidateStatus[c.id] === 'killed') return;
    PROMPTS.forEach(function(p, pi) {
      if (p.accepts.indexOf(c.type) === -1) return;
      if (!moodCompatible(c.mood, p.mood)) return;
      if (state.ratings[c.id + '|' + pi]) return;
      out.push({ c: c, pi: pi });
    });
  });
  return out;
}

function pickNextCombo() {
  var combos = unratedCombos();
  if (combos.length === 0) return null;
  var rated = candidateRatedMap();
  var fresh = combos.filter(function(x) { return !rated[x.c.id]; });
  var pool = fresh.length ? fresh : combos;
  return pool[Math.floor(Math.random() * pool.length)];
}

function reviewCounts() {
  var approved = 0, killed = 0;
  CANDIDATES.forEach(function(c) {
    if (state.candidateStatus[c.id] === 'approved') approved++;
    else if (state.candidateStatus[c.id] === 'killed') killed++;
  });
  var rated = candidateRatedMap();
  var unseen = CANDIDATES.filter(function(c) { return !rated[c.id]; }).length;
  return { approved: approved, killed: killed, unseen: unseen };
}

function renderReview() {
  var counts = reviewCounts();
  document.getElementById('review-progress').textContent =
    'approved ' + counts.approved + ' · killed ' + counts.killed + ' · unseen ' + counts.unseen;
  currentCombo = pickNextCombo();
  var done = !currentCombo;
  document.getElementById('review-card').style.display = done ? 'none' : 'flex';
  document.getElementById('review-buttons').style.display = done ? 'none' : 'grid';
  document.getElementById('review-done').style.display = done ? 'block' : 'none';
  if (done) return;
  var p = PROMPTS[currentCombo.pi];
  var c = currentCombo.c;
  document.getElementById('review-mood').textContent = p.mood.toUpperCase();
  document.getElementById('review-type').textContent = (TYPE_LABELS[c.type] || c.type) + ' · ' + c.id;
  document.getElementById('review-sentence').innerHTML = buildSentence(p.en, c.en);
}

function rateCombo(rating) {
  if (!currentCombo) return;
  var c = currentCombo.c, pi = currentCombo.pi;
  state.ratings[c.id + '|' + pi] = rating;
  if (rating === 'funny' || rating === 'ok') {
    state.candidateStatus[c.id] = 'approved';
  } else if (rating === 'notfunny' && state.candidateStatus[c.id] !== 'approved') {
    state.candidateStatus[c.id] = 'killed';
  }
  saveState();
  renderReview();
}

document.addEventListener('keydown', function(e) {
  if (state.mode !== 'review') return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
  var map = { '1': 'funny', '2': 'ok', '3': 'doesntwork', '4': 'notfunny' };
  if (map[e.key]) rateCombo(map[e.key]);
});
```

- [ ] **Step 4: Verify the flow**

Reload `editor.html`, click **Review**. Expected:
- Progress reads `approved 0 · killed 0 · unseen 120`
- A combo card shows a full sentence with the candidate bolded; mood badge matches the prompt; type label shows e.g. `Activity · c-027`
- Pressing `1` approves: progress becomes `approved 1 · … · unseen 119` and a new combo appears
- Rate one combo `4` (Not funny) on a candidate not yet approved: killed count increments and that `c-id` never reappears (click through ~20 combos to spot-check)
- Rate one `3` (Doesn't work): counts unchanged except unseen (pair blocked silently)
- Typing `1` in the name inputs does NOT rate
- Reload the page: counts survive; the same rated pairs are not shown again
- Narrow the window below 600px: buttons become a 2×2 grid with bigger padding

- [ ] **Step 5: Commit**

```bash
git add editor.html
git commit -m "Add review mode: random combo dealing, 4-way rating, keyboard shortcuts"
```

---

### Task 5: Export — approved candidates, baked skips, clipboard copy

**Files:**
- Modify: `editor.html` — `exportCards()` (~line 668), footer HTML (~line 244), CSS

- [ ] **Step 1: Refactor export into `buildExportText()` + two consumers**

Replace the whole `exportCards()` function with:

```js
function buildExportText() {
  var approved = CANDIDATES.filter(function(c) { return state.candidateStatus[c.id] === 'approved'; });
  var base = ANSWERS.length + state.newAnswers.length;
  var candIdx = {};
  approved.forEach(function(c, i) { candIdx[c.id] = base + i; });

  var prompts = PROMPTS.map(function(p, pi) {
    var skips = getSkips(pi).slice();
    approved.forEach(function(c) {
      var r = state.ratings[c.id + '|' + pi];
      if (r === 'doesntwork' || r === 'notfunny') skips.push(candIdx[c.id]);
    });
    if (skips.length === 0) return p;
    var copy = Object.assign({}, p);
    copy.skip = skips;
    return copy;
  });

  var answers = ANSWERS.concat(state.newAnswers).concat(approved.map(function(c) {
    return { mood: c.mood, type: c.type, en: c.en, sv: c.sv };
  }));

  var lines = [];
  lines.push('// ── AFTER HOURS — CARD DATA ──');
  lines.push('// Blanks: ___ in prompts are rendered as highlighted gaps');
  lines.push('// Name tokens: {p1} and {p2} replaced with player names at runtime');
  lines.push('// Mood tags: "fun" | "deep" | "spicy" | "mix"');
  lines.push('// Grammar lanes: "np" | "gp" | "qf" | "ap"');
  lines.push('// Prompts have "accepts" — which answer types they pair with');
  lines.push('// Prompts have "skip" — answer indices excluded for this prompt');
  lines.push('// Answers have "type" — their grammar lane');
  lines.push('');
  lines.push('var PROMPTS = ' + JSON.stringify(prompts, null, 2) + ';');
  lines.push('');
  lines.push('var ANSWERS = ' + JSON.stringify(answers, null, 2) + ';');
  return lines.join('\n');
}

function exportCards() {
  var blob = new Blob([buildExportText()], { type: 'text/javascript' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'cards.js';
  a.click();
  URL.revokeObjectURL(url);
}

function copyCards() {
  navigator.clipboard.writeText(buildExportText()).then(function() {
    var flash = document.getElementById('copy-flash');
    flash.style.opacity = '1';
    setTimeout(function() { flash.style.opacity = '0'; }, 1500);
  }, function() {
    alert('Copy failed — use the download button instead.');
  });
}
```

- [ ] **Step 2: Add the copy button + flash to the footer**

Replace the footer's export button line with:

```html
<div style="display:flex;align-items:center;gap:8px;">
  <span id="copy-flash">Copied ✓</span>
  <button class="btn-export" onclick="copyCards()">📋 Copy cards.js</button>
  <button class="btn-export" onclick="exportCards()">⬇ Export cards.js</button>
</div>
```

And add CSS:

```css
#copy-flash { color: #32CD32; font-size: 11px; opacity: 0; transition: opacity 0.3s; }
```

- [ ] **Step 3: Verify export correctness**

In the browser, after rating a handful of combos (at least one funny, one doesn't-work on an approved candidate, one not-funny kill):
- Click **📋 Copy cards.js**, paste into a scratch file. Expected: approved candidates appear at the END of `ANSWERS` (no `id` field, `sv: ""`); killed candidates absent; the doesn't-work prompt has a `skip` array whose new index points at that exact candidate (count entries: index = position in exported ANSWERS array, 0-based — verify the answer at that index is the right one)
- Click **⬇ Export cards.js**, confirm the downloaded file has identical content
- "Copied ✓" flashes green next to the buttons

- [ ] **Step 4: Commit**

```bash
git add editor.html
git commit -m "Export approved candidates with baked skips; add clipboard copy"
```

---

### Task 6: End-to-end verification

**Files:** none (verification only)

- [ ] **Step 1: Full workflow pass**

1. DevTools → Application → Local Storage → delete `after-hours-editor-state` (fresh start)
2. Reload; Browse mode; skip one answer on prompt 1; add one manual answer
3. Switch to Review; rate ~15 combos using all four buttons
4. Reload page — mode restored to Review, counts intact
5. Switch to Browse — skips and added answer still there
6. Copy export; verify it contains: the manual answer, the approved candidates, the browse-mode skip AND the review-mode skips in `skip` arrays
7. Load the exported file over `cards.js` locally and open `index.html` — game loads, hand mode deals without console errors

- [ ] **Step 2: Mobile pass**

DevTools device emulation (e.g. iPhone SE): Review mode buttons are thumb-sized in a 2×2 grid, combo card readable, no horizontal scroll.

- [ ] **Step 3: Final commit if any fixes were needed, then push**

```bash
git status   # should be clean except cards.js if you replaced it — revert that: git checkout -- cards.js
git push
```
