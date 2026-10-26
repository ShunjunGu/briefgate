---
doc: checklist
status: approved
---

# Build Checklist

Build mode: fast

## Slices

- [x] **1. Paste notes and see a four-bucket card**
  Becomes usable: Local app opens; sample or pasted notes become Done/Blocked/Need-user/Next on screen.
  Why now: Delivers the unique kernel in slice one, including scaffold.
  PRD ref: `prd.md > The Core Journey`, `prd.md > Features and Behavior > Paste and build`
  Spec ref: `spec.md > Components`, `spec.md > File Structure`, `spec.md > Stack`
  Build: Scaffold package.json + Express server + public HTML/CSS/JS with parser and card UI.
  Verify (mechanical): `npm start` listens; curl index 200; node unit smoke on parseNotes via extracted logic or inline test.
  Learner check: Open app, Load sample, Build card, confirm four buckets look right.
  Commit: `Add BriefGate paste-to-card POC`

- [x] **2. Edit buckets, copy markdown, survive reload**
  Becomes usable: Edits stick; Copy produces markdown; reload restores last card.
  Why now: Completes the core loop and demo reliability.
  PRD ref: `prd.md > Features and Behavior > Edit before copy`, `Copy handoff`, `Sample and persistence`
  Spec ref: `spec.md > Data Model`, `spec.md > Components > Clipboard + persistence`
  Build: localStorage persist/restore; clipboard + fallback; toast states.
  Verify (mechanical): node script simulates persist shape; server still serves; manual browser checklist in VERIFY.
  Learner check: Edit Need-user, Copy handoff, reload, confirm restore.
  Commit: `Add copy, persistence, and empty-state handling`

## Hands-on Checkpoints

- [x] Early usable behavior explored — shared with final review (tiny two-slice build)
- [x] Final kick-the-tires exploration and feedback completed

## Final Review

- [x] Final review complete — feedback resolved and learner confirms ready to ship

## Code Tour and App Map

- [x] Learning activity complete — guided route, focused alternative, prior practice connected, or brief recap
- [x] Optional edit and transfer reflection addressed — offered/declined/already covered/not applicable as appropriate
- [x] `devpost/app-map.html` generated from finished code, checked, and shown, including a project-grounded practice to reuse

Activity and evidence: Followed Build card click → `parseNotes` → DOM fields → `toMarkdown` → clipboard; recorded in app-map.html
Route and stops: `public/app.js` (`parseNotes`, `toMarkdown`, `persist`); `server.js` listen
Edit outcome: not applicable (executor fast-path PoC)
Reflection: already covered — keep PoC boundary when agents want to add LLM calls
Activity mode: focused alternative + app map

## Revisions

- Mirrored `scope.md` / `prd.md` / `spec.md` to repo root in addition to `devpost/` — Devpost rules name those filenames for judges who browse the repo top level.
