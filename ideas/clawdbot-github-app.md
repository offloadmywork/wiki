# Clawdbot GitHub App

**Created:** 2026-01-30  
**Status:** Exploring  
**Priority:** 🔥 Hot  
**Category:** Product  
**Related Project:** Clawdbot  
**Source:** Conversation

## Core Insight

A GitHub App powered by Clawdbot that gives every repo its own AI developer. Installs on repos, responds to issues/PRs/mentions, and proactively works on code. Each repo gets a persistent workspace (SOUL.md, MEMORY.md, etc.) cached between runs for continuity. Could be both event-driven (webhooks) and cron-based (proactive sweeps).

## Open Questions

Hosted service vs GitHub Actions only? Cache strategy for persistent workspace (S3/R2 vs GH Actions cache)? How to handle multi-repo context? Pricing model? How does it differ from existing tools (Copilot, Devin, etc.)?

## Next Steps

1. Define MVP scope
2. Decide hosted vs Actions architecture
3. Build webhook receiver prototype
4. Design workspace/memory format for repos
5. Dogfood on Netanel's own repos

---

*Migrated from Notion on 2026-01-31*
