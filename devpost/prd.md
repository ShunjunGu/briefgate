---
doc: prd
status: approved
---

# BriefGate — Product Requirements

BriefGate is a local handoff card builder for people juggling agent/session notes.
Source: `scope.md > The Unique Kernel`, `scope.md > The Core Loop`.

## The Core Journey
1. Open BriefGate in the browser (local server).
2. See a single screen: paste area on the left/top, live card preview on the right/bottom.
3. Paste messy notes (or click **Load sample**).
4. Click **Build card**. The preview fills four buckets: Done, Blocked, Need-user, Next.
5. Optionally edit any bucket text directly in the preview.
6. Click **Copy handoff** — a markdown block is copied; a toast confirms success.
7. Success = the copied text contains all four headings and is pasteable into another chat.

## Screens and Layout
Single surface. Top bar with product name + short tagline. Main grid: input panel | card preview. Footer with tiny “local only · no API keys” note. No other pages.

## Look and Feel
Calm ops desk: off-white background (`#f6f4ef`), ink text (`#1a1a1a`), accent teal (`#0f766e`) for primary actions, amber (`#b45309`) for Blocked, rose (`#be123c`) for Need-user, slate for Done/Next. Sans UI font (system stack). Dense but breathable; status chips with clear labels. Copy tone: short verbs (“Build card”, “Copy handoff”).

## Features and Behavior

### Paste and build
- As a coordinator, I want to paste raw notes and build a card so that chaos becomes four buckets.
  - [x] Acceptance: After Build card, each of the four buckets shows non-empty text when sample notes are used.
  - [x] Acceptance: Empty paste shows a clear empty-state message and does not invent fake Done items.

### Edit before copy
- As a coordinator, I want to tweak bucket text so the handoff matches reality.
  - [x] Acceptance: Editing a bucket updates the preview immediately.
  - [x] Acceptance: Copy handoff uses the edited text.

### Copy handoff
- As a coordinator, I want one-click markdown copy so I can paste into Slack/Discord/agent prompts.
  - [x] Acceptance: Clipboard receives a markdown block with `## Done`, `## Blocked`, `## Need-user`, `## Next`.
  - [x] Acceptance: A visible confirmation appears after a successful copy.

### Sample and persistence
- As a demo presenter, I want a sample and last-card restore so the video never depends on typing.
  - [x] Acceptance: Load sample fills the paste area with realistic messy notes.
  - [x] Acceptance: Last built card restores from localStorage on reload.

## States and Boundaries
- **First use** — empty paste area, empty card with placeholder labels, Load sample available.
- **Empty build** — toast/message: “Paste some notes first.”
- **Normal** — four buckets filled; Copy enabled.
- **Copy success** — brief “Copied” confirmation.
- **Copy failure** — message asking to select and copy manually (rare).
- **Persistence** — last input + last card saved in localStorage; no server accounts.

## Product Decisions
- Four fixed buckets (Done / Blocked / Need-user / Next) — matches the kernel; not a free-form summarizer.
- Heuristic parsing, not LLM — keeps the PoC offline and demos reliable.
- Single page only — fits 2–4 hour PoC and a 1–3 minute video.

## What We're Building
Local Node static/server app, heuristic note → card transform, editable buckets, clipboard export, sample notes, localStorage restore, README run instructions.

## Deferred From the POC
- LLM parsing — needs keys and network; deferred.
- Multi-card history UI — nice-to-have after kernel works.
- Auth / cloud sync — out of boundary.

## Possible Later Enhancements
Template packs per contest; “diff from previous handoff”; export as GitHub issue body.

## Non-Goals
- Will NOT call external AI APIs in this PoC (demo reliability).
- Will NOT require signup (friction and out of scope).
- Will NOT auto-post to Slack/Discord (permissions and scope).

## Open Questions
None blocking for `4-spec`. Optional later: whether Need-user should force a non-empty field before copy (defer — soft warning only if empty).
