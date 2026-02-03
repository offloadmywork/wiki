# OpenClaw App — Success Metrics for Dev Team Behavior

**Purpose:** Define how we’ll measure whether the OpenClaw App improves developer team behavior and outcomes.

## Metrics, Targets, and Measurement

| Metric | Target | Measurement Approach | Source |
|---|---|---|---|
| **Time-to-first-response on issues** | ≤ 4 hours (median) | Measure time from issue creation to first human or bot response; weekly report. | GitHub Issues API |
| **Issues with a clear “next action”** | ≥ 90% within 24h | Issue must have either an assignee, a labeled next step, or a checklist item within 24h. | GitHub Issues API + label rules |
| **PR review turnaround** | ≤ 1 business day (median) | Time from PR opened to first review/comment by any reviewer. | GitHub PR API |
| **PR decision latency** | ≤ 3 business days (median) | Time from PR opened to merged/closed. | GitHub PR API |
| **Automated triage accuracy** | ≥ 85% correct | Sample 20 issues/PRs per week; compare app suggestions (labels/assignees/priority) vs. final human decisions. | App logs + GitHub labels |
| **Reduction in “ping-pong”** | ≥ 30% fewer “needs info” cycles | Count repeated back-and-forth cycles per issue; compare baseline week vs. app week. | Issue comments analysis |
| **Adoption rate of app suggestions** | ≥ 70% | % of app-recommended labels/assignees accepted without reversal within 48h. | App logs + GitHub events |
| **Maintainer workload signal** | ≥ 20% fewer untriaged items | Count of open items without labels or assignees; track weekly. | GitHub Issues/PRs |

## Measurement Notes

- **Baseline:** Collect 1 week of pre-app data for comparison.
- **Cadence:** Weekly rollup with median + p90 for time-based metrics.
- **Sampling:** For accuracy metrics, review a random sample each week.
- **Success Criteria:** If ≥ 5 of the 8 metrics meet targets for 2 consecutive weeks, the app is “behavior-successful.”

## Data & Instrumentation

- GitHub GraphQL/REST for timestamps, labels, assignees, reviews.
- App logs for suggested actions and automated triage outputs.
- Simple scripts in `/scripts/metrics/` (to be created) for weekly aggregation.

## Risks / Caveats

- Small sample sizes can skew medians; monitor p90.
- Labeling consistency is required; define label taxonomy in a separate doc.

## Owners

- **Metrics owner:** Dev team lead (weekly reporting)
- **Data owner:** App team (ensure logs available and accurate)
