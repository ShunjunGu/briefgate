(function () {
  const STORAGE_KEY = "briefgate.v1";
  const { parseNotes, toMarkdown } = window.BriefGateParse;

  const rawEl = document.getElementById("raw");
  const doneEl = document.getElementById("done");
  const blockedEl = document.getElementById("blocked");
  const needEl = document.getElementById("needUser");
  const nextEl = document.getElementById("next");
  const msgEl = document.getElementById("msg");

  const SAMPLE = `Standup dump from today's agent run:
Done: skill pack installed; scope/prd/spec drafted in empty folder
finished smoke tests for the parser

Blocked:
localhost:3000 already taken by another process

Need user:
Join the Devpost hackathon and record the 1-3 min demo video
confirm GitHub repo should be public under your account

Next:
push BriefGate, fill submission description, submit before deadline
`;

  function setMsg(text, kind) {
    msgEl.textContent = text || "";
    msgEl.className = "msg" + (kind ? " " + kind : "");
  }

  function readCard() {
    return {
      raw: rawEl.value,
      done: doneEl.value,
      blocked: blockedEl.value,
      needUser: needEl.value,
      next: nextEl.value,
      updatedAt: new Date().toISOString(),
    };
  }

  function writeCard(card) {
    if (typeof card.raw === "string") rawEl.value = card.raw;
    doneEl.value = card.done || "";
    blockedEl.value = card.blocked || "";
    needEl.value = card.needUser || "";
    nextEl.value = card.next || "";
  }

  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(readCard()));
  }

  function restore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      writeCard(JSON.parse(raw));
    } catch (_err) {
      /* ignore bad storage */
    }
  }

  function build() {
    const parsed = parseNotes(rawEl.value);
    if (!parsed.ok) {
      setMsg("Paste some notes first.", "err");
      return;
    }
    writeCard({ ...parsed, raw: rawEl.value });
    persist();
    setMsg("Card built. Edit any bucket, then Copy handoff.", "ok");
  }

  async function copyHandoff() {
    const md = toMarkdown(readCard());
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(md);
        setMsg("Copied markdown handoff to clipboard.", "ok");
        persist();
        return;
      }
      throw new Error("clipboard unavailable");
    } catch (_err) {
      rawEl.value = md;
      rawEl.focus();
      rawEl.select();
      setMsg("Clipboard blocked — markdown selected in the notes box for manual copy.", "err");
    }
  }

  document.getElementById("buildBtn").addEventListener("click", build);
  document.getElementById("copyBtn").addEventListener("click", copyHandoff);
  document.getElementById("sampleBtn").addEventListener("click", () => {
    rawEl.value = SAMPLE.trim() + "\n";
    setMsg("Sample loaded. Click Build card.", "ok");
  });
  document.getElementById("clearBtn").addEventListener("click", () => {
    writeCard({ raw: "", done: "", blocked: "", needUser: "", next: "" });
    localStorage.removeItem(STORAGE_KEY);
    setMsg("Cleared.", "ok");
  });

  ["done", "blocked", "needUser", "next"].forEach((id) => {
    document.getElementById(id).addEventListener("input", persist);
  });
  rawEl.addEventListener("input", persist);

  restore();
})();
