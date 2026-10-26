# VERIFY — BriefGate / Build With AI: Basics

Checked: **2026-10-26 ~12:15 Asia/Shanghai** (box clock).

## Rules / eligibility

| Check | Result |
| --- | --- |
| Official page fetched | https://learn-ai-basics.devpost.com/ |
| Full rules fetched | https://learn-ai-basics.devpost.com/rules |
| Age | 18+ / age of majority |
| China excluded? | **No** (standard exceptions only; China not named) |
| New project from empty folder during submission period | Yes — this folder created empty then skill pack + PoC added today |
| Skill pack required | Yes — installed via official `npx skills add challengepost/learn-ai-basics --all -y` |
| Planning docs required | `scope.md` `prd.md` `spec.md` present at repo root **and** under `devpost/` |
| LICENSE | MIT at repo root |
| Public GitHub + 1–3 min public video + short description | **Not done here** — needs user / 成果提交 |
| Devpost Join / Enter Submission | **Not done** — hard rule: no login/submit by implementer |

## Skill pack install

- Command: `npx skills add challengepost/learn-ai-basics --all -y`
- Result: **success** — 6 skills installed under `.agents/skills/` (`1-start` … `6-ship`)
- Log: `skills-install.log`
- Lock: `skills-lock.json`

## Mechanical verification (this box)

```text
npm install        → 0 vulnerabilities
npm test           → smoke-test OK (parseNotes + toMarkdown)
npm start          → BriefGate running at http://localhost:3847
GET /health        → {"ok":true,"app":"briefgate"}
GET /              → 200, contains BriefGate / Build card / Need-user
GET /parse.js,/app.js,/styles.css → 200
```

## Browser / video

- Full UI click-through + clipboard in a real browser **not recorded** on this pass (no demo video file produced).
- Demo path is deterministic via **Load sample → Build card → Copy handoff**.
- See `DEMO_SCRIPT.md` for 1–3 minute recording script.

## Honesty notes

- Planning docs were produced by following official skill templates/structure after skill-pack install; interactive flipped-interview with the human was compressed because this was an executor materials run under deadline. Docs are substantive (not empty placeholders) and match the shipped PoC.
- Root-level `scope.md`/`prd.md`/`spec.md` mirror `devpost/` so judges scanning the repo root see the required filenames.
