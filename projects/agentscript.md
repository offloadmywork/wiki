# AgentScript

**Status:** Active  
**Category:** Infrastructure  
**Last Updated:** 2026-01-30

## Overview

Agent composition DSL extending Deno/TypeScript with first-class primitives: agent, text, executor, with-scoping, vars

## Goals

- Design a declarative format for composing AI agents and tools
- Separate reasoning (agents/context hierarchy) from execution (scripts/runtime optimization)
- Build a runtime that orchestrates agent execution like Node.js orchestrates JavaScript
- Enable reusable, composable agent workflows

## Technical Details

**Core Primitives:**
- `agent` - Agent declarations and configurations
- `text` - Text primitives with import, inline, and interpolation support
- `executor` - Execution context and scoping
- `with` - Scoping mechanism for context management
- `vars` - Variable management

**File Format:** `.ags` files combining markdown and code blocks

## Resources

- See [Ideas: AgentScript](../ideas/agentscript.md) for initial concept
- Related to [Agent Harness](./agent-harness.md) project

## Progress

### Completed
- [x] Research: Deno fork vs transpiler approach
- [x] Implement agent declaration parsing
- [x] Implement text primitive — import, inline, interpolation
- [x] Build minimal runtime — agent loop execution

### In Progress
- [ ] Design .ags file format parser

### Planned
- [ ] Implement executor + with scoping
- [ ] Add comprehensive examples and dogfooding

---

*Migrated from Notion on 2026-01-31*
