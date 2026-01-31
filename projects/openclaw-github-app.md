# OpenClaw GitHub App

**Status:** Active  
**Category:** Product  
**Last Updated:** 2026-01-30

## Overview

GitHub App powered by OpenClaw — gives every repo its own AI developer. Responds to issues, PRs, and mentions; proactively works on code. Each repo gets a persistent workspace with memory/personality.

## Goals

- Give every repository its own AI-powered developer
- Enable repos to respond to issues, PRs, and mentions automatically
- Provide proactive code maintenance and improvements
- Support persistent memory and context across interactions

## Technical Details

**Architecture Options:**
- Hosted service vs GitHub Actions-based
- Webhook-driven events + optional cron-based proactive sweeps
- Persistent workspace storage (S3/R2 vs GH Actions cache)

**Workspace Structure:**
- `SOUL.md` - Repository personality/identity
- `MEMORY.md` - Long-term context
- Daily memory logs
- Project-specific configurations

## Resources

- See [Ideas: Clawdbot GitHub App](../ideas/clawdbot-github-app.md)
- Related to [AgentScript](./agentscript.md) for agent orchestration

## Progress

### In Progress
- [ ] Exploration: Define MVP scope and architecture

### Planned
- [ ] Build webhook receiver prototype
- [ ] Design workspace/memory format for repos
- [ ] Dogfood on Netanel's own repos

---

*Migrated from Notion on 2026-01-31*
