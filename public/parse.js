/**
 * Shared parser for browser and Node smoke tests (CommonJS + browser global).
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.BriefGateParse = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const LABELS = {
    done: /^(done|completed|finished|已完成|完成)[:：\s-]+/i,
    blocked: /^(blocked|blocker|stuck|阻塞|卡住)[:：\s-]+/i,
    needUser: /^(need[- ]?user|needs? user|waiting on user|需用户|等你|待确认)[:：\s-]+/i,
    next: /^(next|todo|upcoming|下一步|接下来)[:：\s-]+/i,
  };

  function bucketFromLine(line) {
    for (const [key, re] of Object.entries(LABELS)) {
      if (re.test(line)) {
        return { key, text: line.replace(re, "").trim() || line.trim() };
      }
    }
    return null;
  }

  function parseNotes(raw) {
    const text = String(raw || "").trim();
    if (!text) {
      return { ok: false, done: "", blocked: "", needUser: "", next: "" };
    }

    const lines = text
      .split(/\r?\n/)
      .map((l) => l.replace(/^[-*•]\s*/, "").trim())
      .filter(Boolean);

    const buckets = { done: [], blocked: [], needUser: [], next: [] };
    let current = "done";

    for (const line of lines) {
      const hit = bucketFromLine(line);
      if (hit) {
        current = hit.key;
        if (hit.text) buckets[current].push(hit.text);
        continue;
      }
      buckets[current].push(line);
    }

    // If everything landed in done and other buckets empty, split leftovers heuristically
    if (!buckets.blocked.length && !buckets.needUser.length && !buckets.next.length && buckets.done.length > 1) {
      const all = buckets.done.slice();
      buckets.done = all.filter((l) => /done|finish|complete|完成|装|写|提交了/i.test(l));
      buckets.blocked = all.filter((l) => /block|stuck|error|fail|卡住|失败|占用/i.test(l));
      buckets.needUser = all.filter((l) => /user|confirm|login|扫码|登录|确认|视频|join/i.test(l));
      buckets.next = all.filter((l) => /next|push|submit|todo|下一步|仓库/i.test(l));
      const used = new Set([...buckets.done, ...buckets.blocked, ...buckets.needUser, ...buckets.next]);
      const rest = all.filter((l) => !used.has(l));
      if (!buckets.done.length) buckets.done = rest.length ? [rest[0]] : ["(see raw notes)"];
      if (!buckets.next.length && rest.length > 1) buckets.next = [rest[rest.length - 1]];
    }

    const join = (arr) => (arr.length ? arr.join("\n") : "");

    return {
      ok: true,
      done: join(buckets.done) || "(none captured — add a Done: line)",
      blocked: join(buckets.blocked) || "(none)",
      needUser: join(buckets.needUser) || "(none — if a human must act, say so here)",
      next: join(buckets.next) || "(none)",
    };
  }

  function toMarkdown(card) {
    return [
      "## Done",
      card.done || "(none)",
      "",
      "## Blocked",
      card.blocked || "(none)",
      "",
      "## Need-user",
      card.needUser || "(none)",
      "",
      "## Next",
      card.next || "(none)",
      "",
    ].join("\n");
  }

  return { parseNotes, toMarkdown };
});
