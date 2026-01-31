const projects = [
  {
    name: "AgentScript",
    status: "Active",
    category: "Infrastructure",
    description: "Agent composition DSL extending Deno/TypeScript with first-class primitives: agent, text, executor, with-scoping, vars",
    lastUpdated: "2026-01-30"
  },
  {
    name: "OpenClaw GitHub App",
    status: "Active",
    category: "Product",
    description: "GitHub App powered by OpenClaw — gives every repo its own AI developer. Responds to issues, PRs, and mentions; proactively works on code. Each repo gets a persistent workspace with memory/personality.",
    lastUpdated: "2026-01-30"
  },
  {
    name: "Parseron",
    status: "Active",
    category: "Product",
    description: "Rust parser library for hierarchical meaning extraction. Parses text character-by-character through configurable producer chains that build up semantic \"meanings\" (chars → words → higher structures). Experimental/research project exploring a novel approach to parsing where matchers and producers compose to create layered understanding of input.",
    lastUpdated: "2026-01-30"
  },
  {
    name: "Agent Harness",
    status: "Active",
    category: "Infrastructure",
    description: "Minimal, self-modifying agent harness (~4.7k lines TS). Core features: LLM agent loop with tool calling, dynamic userland tool creation (code/), SQLite-backed memory, always-on core memory file, async subagent system (generator model), and cron/datetime scheduling. Platform-agnostic — chat adapters (WhatsApp, etc.) live in separate repos. Built on OpenAI SDK + better-sqlite3.",
    lastUpdated: "2026-01-30"
  },
  {
    name: "Beeld",
    status: "Active",
    category: "Product",
    description: "Visual/image product project (early concept stage). Name means \"image\" in Dutch/Afrikaans. No public repo or source code found yet — likely in ideation or private development phase.",
    lastUpdated: "2026-01-30"
  },
  {
    name: "Dev Platform",
    status: "Active",
    category: "Product",
    description: "Developer platform product (early stage). Related to Netanel's broader vision around developer experience tooling (see also: Opah — an opinionated TS runtime for DX, and funee runtime). No dedicated repo found yet — possibly in design/architecture phase or private development.",
    lastUpdated: "2026-01-30"
  },
  {
    name: "funee",
    status: "Active",
    category: "Product",
    description: "Rust-based TypeScript/JavaScript runtime built on deno_core (V8) and SWC. Parses TypeScript modules via SWC, strips types, builds a source dependency graph with module resolution, and executes via V8. Supports host function injection for extensibility. Has bundling/emit capabilities with source map support. Open TODOs include type bundling and optimizing identifier types.",
    lastUpdated: "2026-01-30"
  }
];

for (const project of projects) {
  const filename = project.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const content = `# ${project.name}

**Status:** ${project.status}  
**Category:** ${project.category}  
**Last Updated:** ${project.lastUpdated}

## Overview

${project.description}

## Goals

- *To be defined*

## Technical Details

- *To be documented*

## Resources

- *Links to repos, docs, etc.*

## Progress

### Completed
- *None yet*

### In Progress
- See GitHub issues and project board

### Planned
- *To be defined*

---

*Migrated from Notion on 2026-01-31*
`;
  
  await Deno.writeTextFile(`projects/${filename}.md`, content);
  console.log(`Created projects/${filename}.md`);
}
