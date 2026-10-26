# BriefGate

Turn messy agent/session notes into a **paste-ready handoff card** with four buckets: **Done / Blocked / Need-user / Next**.

Built for [Build With AI: Basics](https://learn-ai-basics.devpost.com/) using the Devpost Learn Skill Pack (`npx skills add challengepost/learn-ai-basics --all -y`).

## Planning docs (required)

- [`scope.md`](./scope.md)
- [`prd.md`](./prd.md)
- [`spec.md`](./spec.md)

Canonical skill-pack copies also live under [`devpost/`](./devpost/).

## Quick start

```bash
npm install
npm start
```

Open **http://localhost:3847**

Optional: `PORT=4000 npm start`

## Try the demo path

1. Click **Load sample**
2. Click **Build card**
3. Edit any bucket if needed
4. Click **Copy handoff** and paste into Slack / Discord / the next agent prompt

## Tests

```bash
npm test
```

## Stack

Node.js 20+ · Express (static server) · Vanilla HTML/CSS/JS · no API keys

## License

MIT
