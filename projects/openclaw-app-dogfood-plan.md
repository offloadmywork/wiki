# OpenClaw App — 1‑Week Dogfood Plan

**Goal:** Validate app behavior in real workflows across a full work week.

## Daily Triggers (repeat each day)

1. **Create 1 new issue** with a clear expected label/assignee.
2. **Open 1 PR** that references the issue.
3. **Comment** on the issue with a question or requested change.
4. **Update PR** with a new commit and request review.
5. **Close/merge** one item to observe final-state handling.

## Observation Checklist

- [ ] App responds to new issue creation within expected SLA
- [ ] Suggested labels/priority are correct
- [ ] Assignee recommendations make sense
- [ ] PR summary or review hints are accurate
- [ ] No duplicate/incorrect notifications
- [ ] App respects manual overrides
- [ ] Latency acceptable (≤ 2 minutes)
- [ ] No unexpected errors or crashes
- [ ] Behavior consistent across different users

## 7‑Day Plan (Simple)

| Day | Focus | Notes |
|---|---|---|
| **Day 1** | Baseline install + sanity check | Ensure webhook delivery + basic triage works |
| **Day 2** | Issue triage accuracy | Validate labels/priority/assignees |
| **Day 3** | PR workflow | Review hints, summaries, response time |
| **Day 4** | Overrides & corrections | Manually change labels and confirm app respects |
| **Day 5** | Edge cases | Empty issue, minimal PR, ambiguous tasks |
| **Day 6** | Multi‑user flow | Different users create/approve to test permissions |
| **Day 7** | Final check | Review logs + confirm success criteria |

## Log Template (fill daily)

```
Date:
Tester:
Repo:

Triggers Run:
- [ ] Issue created
- [ ] PR opened
- [ ] Issue comment
- [ ] PR update + review request
- [ ] Close/merge

Observations:
- Response time:
- Labels applied:
- Assignee recommendation:
- PR summary/review hints:
- Errors or anomalies:
- Manual overrides respected:

Overall verdict (Pass/Needs Fix):
Notes / follow‑ups:
```

## Success Criteria

- ≥ 5/7 days marked **Pass**
- No critical failures (missed webhooks, incorrect permissions, or noisy spam)
- Meets success metrics targets (see Success Metrics doc)
