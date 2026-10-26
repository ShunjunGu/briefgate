const path = require("path");
const express = require("express");

const app = express();
const PORT = Number(process.env.PORT) || 3847;
const ROOT = __dirname;

app.use(express.static(path.join(ROOT, "public")));

app.get("/health", (_req, res) => {
  res.json({ ok: true, app: "briefgate" });
});

app.listen(PORT, () => {
  console.log(`BriefGate running at http://localhost:${PORT}`);
});
