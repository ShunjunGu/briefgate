---
doc: spec
status: approved
---

# BriefGate — Technical Spec

## How This Works, In Plain Language
A tiny Node server serves one HTML page with CSS and JavaScript. When you click Build card, the browser runs a small parser that looks for cues in your notes (lines starting with done/blocked/need/next, or bullet lists) and fills four text areas. Copy handoff builds a markdown string and uses the browser clipboard. Nothing is sent to an external API. Last card is saved in the browser's localStorage.

## The Core Journey Through the System
1. User opens `http://localhost:3847` → Express serves `public/index.html`.
2. User pastes notes into `#raw` → optional Load sample fills from embedded sample text.
3. User clicks Build card → `parseNotes()` in `public/app.js` fills four fields → preview updates.
4. User edits fields → values stay in the DOM; `persist()` writes to localStorage.
5. User clicks Copy handoff → `navigator.clipboard.writeText(markdown)` → toast.
PRD ref: `prd.md > The Core Journey`.

## Stack
- Node.js 20+ (runtime) — https://nodejs.org/
- Express 4.x (static file server only) — https://expressjs.com/
- Vanilla HTML/CSS/JS (no React) — fewer moving parts for a PoC
Rationale: zero build step, easy to record locally, no API keys. Tradeoff: less fancy UI tooling; accepted for speed and clarity.

## Where It Runs and How Someone Tries It
- Runtime: local Node process + browser.
- Requirements: Node.js 20+, no API keys.
- Start: `npm install && npm start`
- Open: http://localhost:3847
- Demo recording: browser window showing paste → build → copy.
- Deployment: optional; not required for submission.

## Look and Feel
Off-white `#f6f4ef` background, ink `#1a1a1a`, teal primary `#0f766e`, amber blocked `#b45309`, rose need-user `#be123c`. System UI font stack. Card with soft border and status chips. Interface copy short and operational. CSS in `public/styles.css` — no UI framework.

## Components

### Static server (`server.js`)
Serves `public/` on port 3847. PRD ref: `prd.md > Screens and Layout`.

### Note parser (`public/app.js` → `parseNotes`)
Heuristic split into Done / Blocked / Need-user / Next. PRD ref: `prd.md > Features and Behavior > Paste and build`.

### Card editor UI
Four editable sections + actions. PRD ref: `prd.md > Features and Behavior > Edit before copy`.

### Clipboard + persistence
Copy markdown; save/restore localStorage. PRD ref: `prd.md > Features and Behavior > Copy handoff`, `Sample and persistence`.

## Data Model
In-browser object:
```
{
  raw: string,
  done: string,
  blocked: string,
  needUser: string,
  next: string,
  updatedAt: ISO string
}
```
Lives in DOM fields + `localStorage['briefgate.v1']`. Cleared only if user clears storage.

## File Structure
```
briefgate/   (repo root)
├── server.js
├── package.json
├── LICENSE
├── README.md
├── scope.md          # mirrored for Devpost judges
├── prd.md
├── spec.md
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── devpost/
│   ├── scope.md      # skill-pack canonical copies
│   ├── prd.md
│   ├── spec.md
│   ├── checklist.md
│   └── app-map.html
├── .agents/skills/   # Devpost Learn Skill Pack
└── .gitignore
```

## External Services and Dependencies
None required at runtime. npm registry only for installing Express once.

## Important Failure Modes
- **Empty paste** → show message; do not fabricate Done items.
- **Clipboard API blocked** → show fallback: select textarea with markdown for manual copy.
- **Port in use** → `PORT` env override; README documents default 3847.

## What Was Simplified and Why
- **Heuristic parser** instead of LLM — reliable offline demo; fuller version would call an API and need keys.
- **Single page** instead of multi-route app — enough to prove the kernel.
- **localStorage** instead of a database — one user, one browser, PoC scale.

## Decisions and Open Issues
- Stack Express + vanilla JS — chosen for zero build step; tradeoff is no component library.
- Port 3847 — uncommon default to avoid colliding with 3000/5173.
- Learner uncertainty checked in build: does `navigator.clipboard` work in this environment? Evidence: mechanical verify via Node smoke test of parser + manual browser note in VERIFY.md if headless clipboard is unavailable.
- No remaining blockers for build.
