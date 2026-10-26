# Devpost submission copy — BriefGate

**Hackathon:** Build With AI: Basics · https://learn-ai-basics.devpost.com/  
**Deadline:** 2026-10-26 17:00 EDT = **2026-10-27 05:00 Asia/Shanghai**  
**Prepared:** 2026-10-26 Asia/Shanghai  
**Status:** Paste-ready locally — **do not** Join / Enter Submission / push repo / upload video unless user authorizes.

Paste into Devpost “Enter a Submission” fields. Edit voice slightly if you want it more personal; keep English.

---

## Project name

BriefGate

---

## Tagline / short description (≤ ~200 characters if the form caps)

Messy agent notes → paste-ready handoff card: Done / Blocked / Need-user / Next. Local, no API keys.

**Alt (longer if allowed):**  
Turn chaotic multi-agent session notes into a scannable handoff card with four forced buckets—so the next human or agent knows what finished, what’s stuck, and what only a user can unlock.

---

## Full description (About the project)

### What it does

BriefGate is a local one-page app that turns messy agent or standup notes into a **paste-ready handoff card** with four fixed buckets:

- **Done** — what finished  
- **Blocked** — what’s stuck  
- **Need-user** — what only a human can unlock (login, confirm, video, Join, etc.)  
- **Next** — what to do after this card  

You paste raw notes (or click **Load sample**), click **Build card**, optionally edit any bucket, then **Copy handoff** to put markdown on the clipboard for Slack, Discord, or the next agent prompt.

It does **not** call an LLM. Parsing is heuristic and offline so the demo is reliable and needs zero API keys.

### Who it’s for

People coordinating multiple AI agents or teammates on paid online tasks—research, drafting, submission—who keep losing context between chats and need a 30-second handoff instead of re-reading a transcript.

### Inspiration

Daily work already splits across research / implement / submit agents. Without a structured handoff, blockers silently stall and “need user” items get buried. BriefGate forces the four buckets so nothing important hides in a paragraph.

### How we built it

1. Installed the official Devpost Learn Skill Pack:  
   `npx skills add challengepost/learn-ai-basics --all -y`  
   Skills `1-start` … `6-ship` live under `.agents/skills/`.
2. Wrote planning docs required by the challenge: `scope.md`, `prd.md`, `spec.md` (also mirrored under `devpost/`).
3. Shipped a thin PoC: Node.js + Express static server + vanilla HTML/CSS/JS.  
   Heuristic parser in `public/parse.js` (shared with `npm test`).  
   UI: Load sample → Build card → edit → Copy handoff + localStorage restore.
4. Documented a 1–3 minute demo path in `DEMO_SCRIPT.md`.

### Challenges we ran into

- Keeping the PoC **offline** (no LLM) while still feeling useful—solved with labeled-line heuristics plus a fallback splitter for unlabeled dumps.  
- Designing a **Need-user** bucket that stays visible (rose chip) so human blockers don’t look like ordinary todos.  
- Fitting the skill-pack planning flow into a short deadline without empty placeholder docs—docs match the shipped UI.

### Accomplishments that we’re proud of

- A complete vertical slice you can run with `npm install && npm start` → http://localhost:3847  
- Four-bucket kernel that matches how multi-agent ops actually fails (missing human unlocks)  
- Smoke tests for `parseNotes` + `toMarkdown`  
- MIT license + README a judge can follow without accounts  

### What we learned

- Forcing structure beats “summarize this” for handoffs between agents.  
- Skill-pack docs (`scope` → `prd` → `spec` → build → ship) keep a hackathon PoC honest about boundaries.  
- Demo reliability matters more than model cleverness when judges may not clone the repo.

### What's next

- Optional LLM-assisted parsing behind a flag (still default to heuristics for demos)  
- Multi-card history and templates per contest type  
- Export as a GitHub issue body  
- Soft warning when Need-user is empty before copy  

### Built with

- Node.js 20+  
- Express  
- Vanilla HTML / CSS / JavaScript  
- Devpost Learn Skill Pack (`challengepost/learn-ai-basics`)  
- MIT License  

*(No cloud AI APIs, no accounts.)*

---

## Demo video script points (for recording — not a substitute for a real video)

See full timing in `../DEMO_SCRIPT.md`. Short version:

1. Show title + “Local only · no API keys”  
2. **Load sample** → messy multi-agent notes  
3. **Build card** → pan Done / Blocked / Need-user / Next chips  
4. Edit **Need-user** slightly  
5. **Copy handoff** → toast → optional paste into editor  
6. End ≤ 3 minutes  

**BLOCKED_USER:** public YouTube/Vimeo URL not produced by implementer.

---

## Repo / links placeholders

| Field | Value |
| --- | --- |
| Repo URL | `BLOCKED_USER` — create public GitHub/GitLab/Bitbucket and push this folder |
| Demo video URL | `BLOCKED_USER` — record + upload public video |
| Live URL | optional; leave empty if no deploy |
| Devpost Join / Submit | `BLOCKED_USER` — user must login |

---

## Exit survey / “what you learned” (optional short answers)

**What did you learn?**  
Structured handoffs beat chat summaries when coordinating agents; skill-pack planning docs keep PoC scope honest.

**Would you use this again?**  
Yes—as a 30-second bridge between research/implement/submit sessions.

**Advice for other learners?**  
Ship the kernel first (four buckets + copy). Don’t start with an API key.
