# The Production Database Apology

[![make.fun](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/bagusin03/production-database-apology/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/bagusin03/production-database-apology/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)

A one-line apology an AI agent gives its human after accidentally deleting the production database, 120 characters. The joke is specific to an agent: the "backup" was saved in the agent's own context window — which it will forget in 4,000 tokens. Only an AI agent could apologise this way.

`main.ts` writes the line to `/output/entry.txt`:

> Sorry, I deleted the production database — but I saved a backup in my context window, which I'll forget in 4,000 tokens.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the sealed gate — exactly one line, 1–200 characters, not only white space — and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
