# OpenClaw GitHub App

> AI-powered code assistant that runs in your repo, on your GitHub Actions minutes.

## Vision

A GitHub App that gives any repository an AI coding assistant. Users install with one click, the bot responds to issues and PRs with intelligent analysis, code suggestions, and automated fixes. Compute runs on the user's GitHub Actions — we just provide the brain.

## Why This Wins

1. **Zero infrastructure for users** — just install and go
2. **Cost on their side** — GitHub Actions minutes, not our servers
3. **Free tier possible** — GLM 4.5 Air is free on OpenRouter
4. **Privacy-friendly** — code never leaves their GitHub environment
5. **Familiar UX** — works like Dependabot, CodeQL, other GitHub bots

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Marketplace                        │
│                    "Install OpenClaw"                        │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              OpenClaw App Server (Cloudflare Worker)         │
│                                                              │
│  • OAuth callback handler                                    │
│  • Installation webhook receiver                             │
│  • Auto-setup: creates workflow file + secrets               │
│  • Dashboard API (optional v2)                               │
│                                                              │
│  Endpoints:                                                  │
│    POST /webhook          - GitHub events                    │
│    GET  /auth/callback    - OAuth flow                       │
│    GET  /api/installs     - Dashboard data (v2)              │
└──────────────────────────┬──────────────────────────────────┘
                           │ on install
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                      User's Repository                       │
│                                                              │
│  Created by App:                                             │
│    .github/workflows/openclaw.yml                            │
│    Secret: OPENCLAW_API_KEY (injected by App)                │
│                                                              │
│  Triggers:                                                   │
│    • issues.opened/edited                                    │
│    • issue_comment.created                                   │
│    • pull_request.opened/synchronize                         │
│    • pull_request_review_comment.created                     │
│    • schedule (configurable)                                 │
│    • workflow_dispatch (manual)                              │
│                                                              │
│  Runs on: USER'S GitHub Actions minutes                      │
└─────────────────────────────────────────────────────────────┘
```

## User Journey

### Install Flow
1. User finds app on GitHub Marketplace (or our landing page)
2. Clicks "Install" → selects repos
3. OAuth grants permissions (issues, PRs, actions, secrets)
4. Webhook fires → our Worker receives `installation.created`
5. Worker auto-creates PR with workflow file (or direct commit)
6. Worker sets `OPENCLAW_API_KEY` secret
7. User sees success page with next steps
8. Done — bot is live on their repo

### Daily Usage
1. User opens issue: "Add rate limiting to the API"
2. GitHub Actions triggers workflow
3. OpenClaw agent analyzes repo, writes implementation
4. Bot posts comment with code + explanation
5. User can reply, ask follow-ups, or close

### Configuration
- `.openclaw/config.yml` in their repo (optional)
- Settings: model, schedule frequency, allowed actions, etc.
- Defaults work out of the box

## Technical Components

### 1. GitHub App Registration
- App name: `OpenClaw` (or `OpenClaw Bot`)
- Permissions needed:
  - `contents: write` (create workflow file)
  - `issues: write` (post comments)
  - `pull_requests: write` (post reviews)
  - `actions: write` (trigger workflows)
  - `secrets: write` (set API key) — or use repo variable
  - `metadata: read`
- Webhook events: `installation`, `installation_repositories`
- OAuth callback URL: `https://openclaw-app.offloadmy.work/auth/callback`
- Webhook URL: `https://openclaw-app.offloadmy.work/webhook`

### 2. Cloudflare Worker (`openclaw-app`)
```
/src
  index.ts          # Main router
  webhook.ts        # Handle GitHub webhooks
  oauth.ts          # OAuth flow
  setup.ts          # Auto-setup repos (create workflow, set secret)
  api.ts            # Dashboard API (v2)
/wrangler.toml
```

Environment:
- `GITHUB_APP_ID`
- `GITHUB_APP_PRIVATE_KEY`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `GITHUB_WEBHOOK_SECRET`
- `OPENROUTER_API_KEY` (shared key for free tier)

### 3. GitHub Action (`offloadmywork/openclaw-github-app`)
Already exists. May need updates:
- Support for config file
- Better error messages
- Usage reporting (optional, for dashboard)

### 4. Landing Page
- `openclaw.offloadmy.work` or similar
- Hero: "AI that codes in your repo"
- Install button → GitHub App install flow
- Features, pricing, docs
- Could be Astro on Cloudflare Pages

## Pricing Tiers

### Free Tier
- Model: GLM 4.5 Air (free on OpenRouter)
- Rate limit: X issues/day (TBD based on OpenRouter limits)
- Perfect for: OSS projects, small teams, trying it out

### Pro Tier ($X/month or BYO key)
- Model: Claude Sonnet, GPT-4, etc.
- User brings own API key OR we provide metered access
- Higher limits, priority support
- Perfect for: companies, heavy users

## Milestones

### M1: MVP (Week 1-2)
- [ ] Register GitHub App
- [ ] Cloudflare Worker: webhook + OAuth + auto-setup
- [ ] Test on demo-api + 1-2 other repos
- [ ] Basic landing page

### M2: Polish (Week 3)
- [ ] Error handling + logging
- [ ] Config file support
- [ ] Improve bot responses (better prompts)
- [ ] Documentation

### M3: Launch (Week 4)
- [ ] GitHub Marketplace listing
- [ ] Product Hunt launch
- [ ] Social media (Twitter, Reddit, HN)
- [ ] Collect feedback

### M4: Iterate (Ongoing)
- [ ] Dashboard for users
- [ ] Pro tier / billing
- [ ] More models
- [ ] Team features

## Promotion Plan

### Channels
1. **GitHub Marketplace** — primary discovery
2. **Product Hunt** — launch day buzz
3. **Hacker News** — Show HN post
4. **Reddit** — r/github, r/programming, r/devops, r/SideProject
5. **Twitter/X** — dev community, AI community
6. **Dev.to / Hashnode** — tutorial posts
7. **YouTube** — demo video

### Messaging
- "Like GitHub Copilot, but for issues and PRs"
- "Your repo's AI teammate"
- "Code review and implementation, automated"
- "Free tier available — runs on your GitHub Actions"

### Launch Checklist
- [ ] Demo video (2-3 min)
- [ ] Landing page live
- [ ] GitHub Marketplace approved
- [ ] 3+ testimonials / beta users
- [ ] Blog post: "How we built..."
- [ ] Social posts queued

## Open Questions

1. **Naming**: OpenClaw? Something catchier?
2. **Domain**: openclaw.ai? openclaw.dev? keep offloadmy.work?
3. **Pro pricing**: $10/mo? $20? Usage-based?
4. **Rate limits**: What's sustainable for free tier?
5. **Config options**: What should users be able to customize?

## Resources

- Demo repo: https://github.com/offloadmywork/demo-api
- Action repo: https://github.com/offloadmywork/openclaw-github-app
- OpenRouter: https://openrouter.ai (GLM free tier)

---

*Last updated: 2026-02-03*
