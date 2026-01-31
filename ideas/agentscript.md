# AgentScript

**Created:** 2026-01-30  
**Status:** Exploring  
**Priority:** 🔥 Hot  
**Category:** Product  
**Related Project:** OpenClaw GitHub App  
**Source:** Conversation

## Core Insight

A DSL/runtime for composing AI agents and tools. Agents (markdown-based definitions) and tools (Deno functions) are first-class primitives. The runtime orchestrates execution — like Node is to JS. Separates reasoning (agents/context hierarchy) from execution (scripts/runtime optimization). Emerged from real usage patterns: agents handle decisions at each abstraction layer, scripts handle deterministic work at the leaves.

## Open Questions

What's the syntax? Markdown frontmatter + code blocks? How does it relate to OpenClaw's existing agent config? Should it be a standalone runtime or an OpenClaw extension? How to handle state passing between agents? Is this the same product as the GitHub App or complementary?

## Next Steps

1. Document the current manual pattern (agent hierarchy + scripts) as a reference implementation
2. Design the declarative format — what does an AgentScript file look like?
3. Build a minimal executor that can parse and run a simple agent+tool composition
4. Dogfood on our own workflows

---

*Migrated from Notion on 2026-01-31*
