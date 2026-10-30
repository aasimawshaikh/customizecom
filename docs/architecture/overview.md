# Architecture Overview

## Goals

- One authoritative backend for web, mobile, and admin experiences.
- Custom hampers are configurations assembled by customers, not pre-made SKUs.
- Product availability, packaging compatibility, pricing, taxes, and checkout are validated server-side.
- AI helps discover and configure gifts but cannot invent catalogue items or set authoritative prices.

## Components

- Customer web: React + Vite + TypeScript
- Customer mobile: React Native + Expo + TypeScript
- Admin dashboard: React + Vite + TypeScript
- API: Node.js + Express + TypeScript
- Database: PostgreSQL
- ORM and migrations: Prisma
- Shared contracts: TypeScript workspace packages

## Pricing

Store monetary values as integer minor units (paise for INR), never floating-point currency values. The API computes all totals and persists an immutable price snapshot at order creation.

## AI Gift Concierge

The model may receive a bounded set of eligible catalogue data and customer-provided preferences. It returns product IDs and explanations, not trusted prices or stock claims. The API resolves product IDs, validates availability and packaging constraints, recalculates totals, and asks for customer confirmation before checkout.

## Security baseline

- Authentication and server-side role-based authorization
- Request validation and bounded payload sizes
- Rate limiting on authentication, AI, and checkout endpoints
- Secure secret management and redacted logs
- Payment provider webhook signature verification and idempotency
- Inventory and order updates inside database transactions
- No storage of payment card details
- Privacy controls for recipient profiles and digital greeting content

## Current status

This document describes the intended architecture. The repository is a scaffold; production readiness, migrations, tests, monitoring, and integrations are not yet complete.
