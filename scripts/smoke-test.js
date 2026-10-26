const assert = require("assert");
const { parseNotes, toMarkdown } = require("../public/parse.js");

const sample = `
Done: installed skill pack; wrote scope/prd/spec drafts
- finished local folder scaffold

Blocked:
port 3000 already in use on my machine

Need user:
confirm Devpost Join + record the 2-min demo video

Next:
push public GitHub repo and paste submission fields
`;

const card = parseNotes(sample);
assert.ok(card.done.toLowerCase().includes("skill"), "done should capture skill pack");
assert.ok(card.blocked.toLowerCase().includes("port"), "blocked should capture port");
assert.ok(card.needUser.toLowerCase().includes("devpost") || card.needUser.toLowerCase().includes("video"), "need-user");
assert.ok(card.next.toLowerCase().includes("github") || card.next.toLowerCase().includes("push"), "next");

const empty = parseNotes("   ");
assert.strictEqual(empty.ok, false);

const md = toMarkdown({
  done: "a",
  blocked: "b",
  needUser: "c",
  next: "d",
});
assert.ok(md.includes("## Done"));
assert.ok(md.includes("## Blocked"));
assert.ok(md.includes("## Need-user"));
assert.ok(md.includes("## Next"));

console.log("smoke-test OK");
