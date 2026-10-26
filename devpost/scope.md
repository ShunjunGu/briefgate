---
doc: scope
status: approved
---

# BriefGate

A local one-page tool that turns messy agent/session notes into a paste-ready handoff card.

## The Unique Kernel
It does not summarize for curiosity — it forces four buckets (**Done / Blocked / Need-user / Next**) so the next person (or agent) knows exactly what to continue, what is stuck, and what only a human can unlock.

## Who It's For
Someone coordinating multiple AI agents or teammates on paid online tasks — research, drafting, submission — who keeps losing context between chats and needs a 30-second handoff instead of re-reading a transcript.

## The Core Loop
Open the page → paste raw notes → click **Build card** → scan the four buckets → **Copy handoff** → paste into Slack / Discord / the next agent prompt → optionally tweak a field and copy again.

## Inspiration & Identity
Feels like a sticky note + boarding pass: calm, dense-but-scannable, high-contrast status chips. Tone: direct ops language, not marketing fluff. Avoid generic purple-gradient “AI startup” chrome.

## Why This Matters to the Learner
Daily work already splits across research / implement / submit agents. Without a structured handoff, blockers silently stall and “need user” items get buried.

## What "Working" Looks Like
Paste a messy paragraph → see four filled buckets → copy a markdown handoff block → paste elsewhere and confirm it is readable. The “oh, that's cool” beat is watching noisy notes snap into a card with a clear **Need-user** line.

## The POC Boundary
One local page, client-side parsing heuristics (no LLM API), in-memory + localStorage for last card, copy-to-clipboard. Prove the kernel in a demo video without accounts or cloud.

## Later
LLM-assisted parsing, multi-card history, export to GitHub issue, templates per contest type.

## Explicitly Cut
- Accounts / login — not needed for a local PoC
- Real LLM calls — avoid API keys and latency for the demo
- Team sharing / sync — out of PoC timebox
- Mobile-native app — browser desktop recording is enough
