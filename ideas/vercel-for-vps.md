# Vercel for VPS

**Created:** 2026-02-10  
**Status:** Ideation  
**Category:** DevTools / Infrastructure  
**Source:** Conversation with Netanel

## Problem

Vercel has incredible DX (CLI, dashboard, logs, analytics, preview URLs) but you're locked into their infrastructure. Raw VPS gives you control but terrible DX — SSH, git pull, pm2, nginx config, manual SSL...

The gap: **Vercel DX on your own metal.**

## Proposal

A thin layer that brings Vercel-like experience to self-managed VPS:

### Agent (runs on VPS)
- Single binary (~10MB, Go or Rust)
- Reverse proxy with auto-SSL (ACME/Let's Encrypt)
- Wraps your start command, captures stdout/stderr
- Monitors CPU, memory, request metrics
- Zero-downtime deploys (spin up new → health check → swap)
- Preview URLs for branches (`feature-x.yourapp.com`)
- Exposes API for CLI/dashboard

### CLI
```bash
vvps init                    # Links to your VPS
vvps deploy                  # Push current build
vvps logs                    # Stream logs
vvps logs --since 1h         # Historical
vvps env set DATABASE_URL=x  # Env vars
vvps rollback                # Previous deploy
vvps ps                      # Running processes
```

### Dashboard
- Logs viewer (real-time + historical)
- Analytics (requests, latency, errors)
- Rollback UI
- Env var management
- Talks to agent API over authenticated HTTPS

## Why Not Existing Tools?

- **Coolify / CapRover**: Feel like "self-hosted Heroku" — heavy, Docker-centric, complex
- **Dokku**: Better but still Heroku-ish, not Vercel-ish
- **Kamal**: Deploy-focused, not full DX

This should be **thin** — just the proxy + CLI + optional dashboard. Not a full PaaS.

## Open Questions

- Should it be Docker-aware or container-agnostic?
- How to handle multi-app deployments on single VPS?
- Auth model for CLI → agent communication?
- Build on VPS or push pre-built artifacts?

## Next Steps

1. Research existing thin alternatives (kamal, piku, others)
2. Define MVP scope — what's the minimum viable thin layer?
3. Prototype the agent binary
4. Test with a real app deployment
