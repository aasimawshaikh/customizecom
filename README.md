# CustomizeCom

A fully customizable gifting platform where customers create personal hampers with help from an AI Gift Concierge. The platform does not sell standalone products or pre-made hampers.

## Product principles

- Start with the recipient, occasion, mood, interests, and budget.
- Customers build their own hamper from eligible products.
- Every configuration includes products, packaging, a message, and optional digital greeting features.
- The server is authoritative for stock, compatibility, price, tax, delivery, and checkout validation.
- AI recommendations must be grounded in the verified catalogue and remain editable by the customer.

## Planned stack

- Web: React + Vite + TypeScript
- Mobile: React Native + Expo + TypeScript
- API: Node.js + Express + TypeScript
- Database: PostgreSQL + Prisma
- Shared contracts: TypeScript packages
- AI: provider-agnostic Gift Concierge service behind the backend API

## Repository layout

```text
apps/
  web/          Customer web storefront
  mobile/       Android and iOS app
  admin/        Operations and catalogue dashboard
backend/        Express API and Prisma schema
packages/
  shared-types/ Shared TypeScript contracts
  validation/   Shared request validation schemas
  api-client/   Typed API client
docs/
  architecture/ Architecture and decision records
  specifications/ Product and API specifications
```

## Status

Initial scaffold only. Feature modules, UI screens, integrations, tests, and deployment pipelines still need to be implemented.

## Security

- Never commit real credentials, API keys, payment secrets, or production environment files.
- Keep secrets in environment variables or a secrets manager.
- Verify payment webhooks server-side.
- Recalculate totals and validate inventory on the server before order creation.
