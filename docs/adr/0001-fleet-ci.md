# ADR-0001: CI, review, and merge policy come from fleet-ci

Status: accepted. Date: project creation.

This repo inherits CI, risk-tiered auto-merge, Claude review, and Dependabot
handling from `JimmayVV/fleet-ci@v1` rather than defining them locally.
Policy changes happen there and roll out by tag. The one local decision is
the `high-paths` list in `.github/workflows/risk.yml`, which names the files
that always need a human.
