# Agent Harness

**Status:** Active  
**Category:** Infrastructure  
**Last Updated:** 2026-01-30

## Overview

Minimal, self-modifying agent harness (~4.7k lines TS). Core features: LLM agent loop with tool calling, dynamic userland tool creation (code/), SQLite-backed memory, always-on core memory file, async subagent system (generator model), and cron/datetime scheduling. Platform-agnostic — chat adapters (WhatsApp, etc.) live in separate repos. Built on OpenAI SDK + better-sqlite3.

## Goals

- Provide a minimal, reliable agent execution harness
- Enable dynamic tool creation and self-modification
- Support async subagent spawning with clean context isolation
- Maintain persistent memory with SQLite backing
- Platform-agnostic core with adapter pattern

## Technical Details

**Core Components:**
- Agent loop with tool calling (OpenAI SDK)
- Dynamic tool executor (`code/` directory)
- SQLite-backed memory system
- Async subagent system (generator model)
- Cron/datetime scheduling
- Platform adapters (WhatsApp, Discord, etc.)

**Tech Stack:**
- TypeScript (~4.7k lines)
- OpenAI SDK for LLM integration
- better-sqlite3 for memory persistence

## Resources

- Private repository (infrastructure)
- Related to [AgentScript](./agentscript.md) DSL project

## Progress

### Completed
- [x] Agent loop reliability: add retry logic and error boundaries

### In Progress
- Core reliability improvements
- Developer experience enhancements
- Observability and quality tooling

### Planned
- [ ] Improve subagent ergonomics — error handling and lifecycle
- [ ] Add streaming/SSE support to agent loop
- [ ] Expand test coverage beyond tool-executor
- [ ] Add PROGRESS.md and keep it updated
- [ ] Design tool authoring DX — template + docs + examples
- [ ] Scheduler ergonomics — cron expression builder + timezone handling
- [ ] SQLite memory workflows — query patterns and migration strategy
- [ ] Add structured logging/observability to agent loop
- [ ] Implement tool-executor TODO: actual tool logic dispatch

---

*Migrated from Notion on 2026-01-31*
