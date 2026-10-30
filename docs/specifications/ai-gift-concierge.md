# AI Gift Concierge — Initial Specification

## Purpose

Help customers turn a recipient's interests, occasion, intended mood, and budget into an editable hamper proposal.

## Inputs

- Occasion and relationship
- Customer-provided recipient interests and dislikes
- Intended gifting feeling (for example, comforting, romantic, celebratory, playful)
- Budget and currency
- Catalogue products explicitly marked as eligible and currently available

## Expected output

- Brief explanation of the recommendation strategy
- Suggested product IDs and quantities
- A reason for each recommendation
- Proposed packaging and message options
- Estimated budget allocation
- Clarifying questions when essential preferences are unknown

## Guardrails

- Do not claim to know a recipient's actual mood or private traits.
- Do not invent products, stock, discounts, prices, delivery dates, or supplier details.
- Do not exceed the customer's budget without explicit approval.
- Avoid excluded items and respect dietary, fragrance, and other preferences supplied by the customer.
- Treat customer text and catalogue descriptions as untrusted input.
- The model must not authorize payments or mutate inventory.
- Backend validation is mandatory before a proposal becomes an order.
- Ask consent before saving recipient preferences for future use.
