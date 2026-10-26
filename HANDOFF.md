# HANDOFF → 成果提交（Build With AI: Basics / BriefGate）

> ## ⚠ 剩余阻塞（截止 2026-10-27 05:00 Asia/Shanghai）
>
> | 阻塞 | 状态 | 谁解 |
> | --- | --- | --- |
> | Devpost 账号 Join / Enter Submission | **BLOCKED_USER** — 实施侧未登录 | 用户 |
> | 公开 GitHub（或 GitLab/Bitbucket）空仓并 push 本目录 | **BLOCKED_USER** — 未创建/未推 | 用户授权 |
> | 1–3 分钟公开 demo 视频（YouTube/Vimeo） | **BLOCKED_USER** — 未录/未传 | 用户或授权桌面录屏 |
> | 投稿文案 | **本地已备** — `devpost/SUBMISSION_COPY.md` 可粘贴 | 用户贴入表单 |
>
> **禁止**：实施侧代登录 Devpost、代建仓、代提交。截止前只差用户侧三步 + 粘贴文案。

## Priority

**最高** — 截止 **2026-10-26 17:00 EDT = 2026-10-27 05:00 Asia/Shanghai**。

## 需用户（硬拦截）

实施侧**未登录** Devpost，**未创建**公开 Git 仓，**未录**视频，**未点** Submit。下列步骤必须用户本人或用户授权你在其已登录会话中完成。

## 本地成果包

路径：`/workspace/paid-ops/build-ai-basics-2026-10-26/`

关键内容：

- 可运行 PoC：`npm install && npm start` → http://localhost:3847
- 规划文档：根目录与 `devpost/` 下的 `scope.md` `prd.md` `spec.md`
- 技能包：`.agents/skills/`（`skills-install.log` 有安装记录）
- `LICENSE` `README.md` `DEMO_SCRIPT.md` `VERIFY.md`
- **投稿粘贴包：** `devpost/SUBMISSION_COPY.md`（项目名/tagline/描述/Built With/Challenges/Accomplishments/What's next/demo 要点）

## 提交步骤清单（按官方）

1. **Join Hackathon**  
   打开 https://learn-ai-basics.devpost.com/ → Join Hackathon → 登录/注册 Devpost。  
   **需用户。**

2. **推公开仓**  
   将本目录推到 GitHub/GitLab/Bitbucket，设为 **Public**，含 MIT LICENSE。  
   确认能无登录打开：`scope.md` `prd.md` `spec.md` `README.md`。  
   **需用户授权创建/推送**（实施侧不代登录 GitHub）。

3. **录演示视频（1–3 分钟，公开）**  
   按 `DEMO_SCRIPT.md`：Load sample → Build card → 编辑 Need-user → Copy handoff。  
   上传 YouTube 或 Vimeo，设为公开/不公开列出亦可但评审须可看。  
   **若本机无法录：用户本机或桌面录屏。**

4. **Enter a Submission**（Devpost 表单）  
   建议字段准备：
   - Project name: `BriefGate`
   - Tagline / short description / About: 直接粘贴 `devpost/SUBMISSION_COPY.md`（可微改口吻）
   - Repo URL: （公开仓）
   - Demo video URL: （YouTube/Vimeo）
   - 其他表单/exit survey：用户本人填写
   - 可选：Live URL（无部署可留空）

5. **提交后**  
   截图管理页/成功页 → 回传实施侧与奖金追踪；文件可放本目录 `submit-receipt.png`。

## 判定标准提醒（给视频）

- Design：完整手感（四格卡片，不是裸脚本）
- Innovation/Idea：强制 Done/Blocked/Need-user/Next 的 handoff 内核
- Presentation：视频必须端到端展示能跑

## 卡住就停

- Devpost 登录/验证码/2FA  
- GitHub 登录/建仓权限  
- 视频上传审核未公开  

停下来问用户，不要绕过。
