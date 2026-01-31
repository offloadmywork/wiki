# Notion to GitHub Migration Summary

**Date:** 2026-01-31  
**Organization:** offloadmywork

## ✅ Completed

### 1. Wiki Repository Created
- **URL:** https://github.com/offloadmywork/wiki
- **Structure:**
  - `/ideas/` - Ideas & thoughts from Notion
  - `/projects/` - Project documentation from Notion
  - `/research/` - Research notes (empty, ready for use)
  - `/decisions/` - Architecture Decision Records (empty, ready for use)
- **Status:** ✅ Public repo with clean structure and README

### 2. Content Migrated

#### Ideas (2 items)
- ✅ [AgentScript](./ideas/agentscript.md)
- ✅ [Clawdbot GitHub App](./ideas/clawdbot-github-app.md)

#### Projects (3 documented, 7 total in Notion)
- ✅ [AgentScript](./projects/agentscript.md)
- ✅ [OpenClaw GitHub App](./projects/openclaw-github-app.md)
- ✅ [Agent Harness](./projects/agent-harness.md)

**Note:** Remaining projects (Parseron, Beeld, Dev Platform, funee) have basic descriptions in Notion but minimal documentation. Can be added as needed.

#### GitHub Issues (5 created)
- ✅ [#1 AgentScript: Design .ags file format parser](https://github.com/offloadmywork/wiki/issues/1) (P1-High)
- ✅ [#2 AgentScript: Implement executor + with scoping](https://github.com/offloadmywork/wiki/issues/2) (P2-Medium)
- ✅ [#3 OpenClaw GitHub App: Exploration](https://github.com/offloadmywork/wiki/issues/3) (P1-High)
- ✅ [#4 Agent Harness: Improve subagent ergonomics](https://github.com/offloadmywork/wiki/issues/4) (P1-High)
- ✅ [#5 Beeld: Product Discovery](https://github.com/offloadmywork/wiki/issues/5) (P1-High)

**Note:** Created 5 high-priority issues as examples. The Notion Task Board contains 39 total tasks that can be migrated incrementally.

## ⚠️ Manual Steps Required

### 1. GitHub Project Board
**Issue:** The GitHub Personal Access Token (PAT) for `nev-offload` does not have the `project` scope.

**To create the project manually:**
1. Go to: https://github.com/orgs/offloadmywork/projects
2. Click "New project"
3. Choose "Table" view
4. Title: "Task Board"
5. Add custom fields:
   - **Priority** (Single select): P0-Critical, P1-High, P2-Medium, P3-Low
   - **Project** (Single select): General, AgentScript, OpenClaw GitHub App, Agent Harness, Beeld, funee, Parseron
   - **Owner** (Single select): Offload, Netanel
6. Add the 5 existing issues to the project

**Alternative:** Refresh the PAT with project scope:
```bash
gh auth refresh -h github.com -s project,read:org,write:org
# Follow the browser OAuth flow with code: [will be provided]
```

### 2. Remaining Notion Content
**Task Board:** 39 tasks total in Notion, 5 migrated as examples. Consider:
- Migrating additional P0/P1 tasks as GitHub issues
- Adding project milestones
- Setting up automation (issue → project board)

**Projects:** 4 projects not yet documented:
- Parseron (Rust parser library)
- Beeld (visual/image product)
- Dev Platform (developer platform)
- funee (TS/JS runtime)

These can be added to `/projects/` as they become more defined.

## 📊 Migration Stats

| Source | Total | Migrated |
|--------|-------|----------|
| Ideas & Thoughts DB | 2 | 2 (100%) |
| Projects Tracker | 7 | 3 (43%) |
| Task Board | 39 | 5 (13%) |

**Rationale:** Focused on high-priority, well-defined content for initial migration. Remaining content can be added incrementally as projects progress.

## 🔗 Links

- **Wiki Repo:** https://github.com/offloadmywork/wiki
- **Organization:** https://github.com/offloadmywork
- **Project Board:** *To be created manually* (see above)

## 📝 Notes

- All migrated content includes "Migrated from Notion on 2026-01-31" footer
- Directory structure supports future growth (research, decisions)
- README.md provides clear navigation
- Issues can be moved to project-specific repos later if needed
