# Hamper Builder — Initial Specification

## Customer inputs

- Occasion
- Recipient name and relationship
- Recipient interests and dislikes
- Intended gifting mood and style
- Budget
- Selected products and quantities
- One compatible primary box
- Packaging and finishing options
- Physical message and paper style
- Optional digital greeting

## Rules

1. A customer must not purchase an individual catalogue item without creating a hamper.
2. Do not offer pre-made hampers as purchasable products.
3. Product selection must use active, available catalogue entries.
4. Each item must satisfy configured quantity, stock, and packaging constraints.
5. Only compatible packaging options may be selected.
6. Prices and totals are computed by the backend.
7. AI recommendations are suggestions and must be editable.
8. The backend must revalidate stock, price, and delivery eligibility before payment.
9. Persist the exact item and price snapshot associated with an order.
10. Show applicable charges before the customer confirms payment.

## Initial API candidates

- GET /api/v1/occasions
- GET /api/v1/categories
- GET /api/v1/products
- GET /api/v1/packaging-options
- POST /api/v1/hamper-configurations
- PATCH /api/v1/hamper-configurations/:id
- POST /api/v1/ai/gift-recommendations
- POST /api/v1/checkout/quote
- POST /api/v1/orders
- GET /api/v1/orders/:id

These are proposed endpoints, not implemented routes yet.
