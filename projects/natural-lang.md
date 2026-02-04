# Natural Programming Language

## Vision

A programming language where you write free-form natural text, and an agentic compiler turns it into working software. Full IDE experience (squigglies, go-to-definition, suggestions) but on prose, not code.

**The core insight:** Software specifications are already code — we just haven't had a compiler smart enough to execute them directly. Natural treats natural language descriptions as the source of truth, not as documentation that becomes stale the moment it's written.

## Why Natural?

Programming languages have spent decades moving toward human readability. Natural completes that journey. Instead of translating your ideas into a programming language's syntax, you write your ideas directly and let an agentic compiler handle the translation to executable code.

### What Natural Is
- **Spec-is-code:** Your `.nl` files are versioned, reviewed, and deployed like any source code
- **Engineering-grade:** Full IDE support with diagnostics, go-to-definition, refactoring
- **Maintainable:** Changes to requirements = changes to the .nl files, with type checking and validation
- **Transparent:** The compiler shows you what it generates, and you can refine your description

### What Natural Is NOT
- **Not OpenSpec:** OpenSpec is a spec-then-code workflow tool. Natural IS the code.
- **Not prompt-to-code:** Prompts are ephemeral. .nl files are source-controlled truth.
- **Not Inform 7:** Inform 7 is limited to interactive fiction. Natural is general-purpose.
- **Not a documentation generator:** You're not writing docs that generate code. You're writing executable specifications.

## Architecture

### 1. `.nl` File Format

Free-form natural language text with a minimal reference/definition system. The syntax is intentionally lightweight — just enough structure for the compiler to understand relationships without feeling like code.

**Ref/Def System:**
- `@ConceptName` — defines a concept (entity, type, component, feature)
- References to defined concepts are automatically linked
- Undefined references trigger diagnostics
- Ambiguous references trigger warnings

**Philosophy:** Maximum readability. If it feels like code, it's too much syntax.

### 2. LSP Server — The "Agentic Linter"

A Language Server Protocol implementation that uses an LLM to analyze `.nl` files in real-time for:
- **Coherence:** Do the pieces fit together logically?
- **Ambiguity:** Are there multiple ways to interpret this?
- **Contradictions:** Does statement X conflict with statement Y?
- **Undefined references:** Are you using concepts that haven't been defined?

The LSP provides diagnostics in three levels:
- 🔴 **Error:** Contradiction, undefined reference, impossible requirement
- 🟡 **Warning:** Ambiguity, vague specification, missing edge case
- 💡 **Info:** Suggestion for clarity, better definition, edge case to consider

### 3. Agentic Compiler

A multi-step compilation pipeline that turns `.nl` files into executable code:

1. **Parse:** Extract concepts, relationships, and requirements from natural text
2. **Analyze:** Build a semantic model of what the program should do
3. **Plan:** Design the architecture (modules, types, functions, data flow)
4. **Generate:** Produce actual code in the target language
5. **Validate:** Ensure the generated code matches the specification

The compiler is iterative — it can refine its understanding and regenerate code as specifications evolve.

**Initial target:** TypeScript (with plans to support Python, Go, Rust later)

### 4. VSCode Extension

Wraps the LSP server and provides a first-class IDE experience:
- Syntax highlighting for `.nl` files
- Real-time squiggly lines for diagnostics
- Go-to-definition on concepts
- Hover tooltips with concept details
- Code actions (quick fixes for common issues)
- Inline suggestions for missing information

**The moat:** This turns "vibe coding" into engineering. You get the flexibility of natural language with the rigor of a type system.

### 5. CLI

Command-line interface for working with Natural projects:

```bash
natural init          # Initialize a new Natural project
natural check         # Analyze .nl files for issues
natural build         # Compile .nl files to target language
natural watch         # Watch mode for development
natural explain       # Explain what the compiler understands
```

## Diagnostic Types

### 🔴 Errors (Red Squiggly)
- **Contradiction:** "Users can have multiple emails" vs "Email must be unique per user"
- **Undefined reference:** Using `@PaymentMethod` without defining it
- **Impossible requirement:** "Response time must be both instant and include database query"
- **Type mismatch:** "User age is a string" used in "age must be over 18"

### 🟡 Warnings (Yellow Squiggly)
- **Ambiguity:** "Users can update their profile" — what fields exactly?
- **Vague specification:** "The system should be fast" — how fast?
- **Missing edge case:** "Users can delete comments" — what about comments with replies?
- **Implicit behavior:** What happens when a required field is missing?

### 💡 Info (Blue Underline)
- **Suggestion for clarity:** Consider specifying the exact format for email validation
- **Better definition:** This concept might be clearer if split into two separate concepts
- **Edge case to consider:** What should happen if the user is already logged in?
- **Potential optimization:** This could be cached for better performance

## Example .nl File

```
@UserProfile
A user has a name, email, and optional avatar URL.
Email must be unique across all users.
Names are 2-100 characters.

@Authentication
Users can register with email and password.
Passwords must be at least 8 characters with one number.
After registration, send a verification email.
Users can login with email and password.
Failed login attempts are limited to 5 per hour per email.

@Dashboard
After login, show a dashboard with:
- A welcome message using their name
- A list of their recent activity (last 10 items)
- A sidebar with navigation to Settings and Profile

@Settings
Users can update their name and avatar.
Users can change their password (requires current password).
Users can delete their account (requires password confirmation and shows a warning).
```

## Technical Implementation Notes

### Parser
- Regex/NLP-based extraction of `@Concept` definitions
- Section detection (paragraphs, lists, requirements)
- Relationship extraction (X references Y, X requires Z)

### AST Structure
```typescript
interface NaturalAST {
  concepts: Concept[]
  relationships: Relationship[]
  requirements: Requirement[]
}

interface Concept {
  name: string
  definition: string
  properties: Property[]
  constraints: Constraint[]
}
```

### LLM Integration
- Use structured prompts with examples for analysis
- Cache embeddings for repeated analysis
- Incremental analysis (only re-analyze changed sections)
- Confidence scores for diagnostics

### Code Generation Strategy
- Template-based generation for common patterns
- LLM-guided generation for complex logic
- Progressive refinement (generate → validate → refine)
- Human-in-the-loop option for critical sections

## Roadmap

### Phase 1: Foundation (MVP)
- [ ] Core parser and AST
- [ ] LSP server with basic diagnostics
- [ ] VSCode extension with syntax highlighting
- [ ] Simple compiler (TypeScript output)
- [ ] CLI basics (`init`, `check`, `build`)

### Phase 2: Intelligence
- [ ] Advanced LLM analysis
- [ ] Smart diagnostics (ambiguity, contradiction detection)
- [ ] Go-to-definition and hover tooltips
- [ ] Code actions and quick fixes

### Phase 3: Production-Ready
- [ ] Incremental compilation
- [ ] Multi-file projects
- [ ] Import/export between .nl files
- [ ] Generated code debugging (source maps)
- [ ] Testing framework integration

### Phase 4: Ecosystem
- [ ] Additional language targets (Python, Go)
- [ ] Plugin system for custom analyzers
- [ ] Standard library of common patterns
- [ ] Community examples and templates

## Design Principles

1. **Readability First:** If humans can't read it easily, it's not Natural
2. **Progressive Enhancement:** Start with simple text, add structure as needed
3. **Fail Gracefully:** Ambiguity isn't fatal — it's a conversation with the compiler
4. **Trust but Verify:** Generate code, but let developers inspect and override
5. **Version Control Native:** .nl files are first-class source code

## Success Metrics

- Can a non-programmer understand a .nl file without training?
- Can a programmer maintain .nl files faster than traditional code?
- Does the IDE experience feel as robust as TypeScript/Rust?
- Can teams use .nl files in code review and version control?

## Open Questions

- How to handle performance-critical code that needs low-level control?
- What's the right balance between compiler magic and explicit control?
- How to version the compiler itself when it affects code generation?
- Can .nl files be the documentation AND the implementation?

---

**Status:** Spec phase  
**Repository:** https://github.com/offloadmywork/natural-lang  
**Started:** February 2026
