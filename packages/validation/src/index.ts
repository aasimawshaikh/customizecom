import { z } from "zod";

export const recipientPreferencesSchema = z.object({
  name: z.string().trim().max(80).optional(),
  relationship: z.string().trim().max(40).optional(),
  interests: z.array(z.string().trim().min(1).max(80)).max(30).default([]),
  avoidances: z.array(z.string().trim().min(1).max(120)).max(30).default([]),
});

export const hamperSelectionSchema = z.object({
  productId: z.string().min(1).max(100),
  quantity: z.number().int().min(1).max(50),
});

export const hamperDraftSchema = z.object({
  occasion: z.string().trim().min(1).max(40),
  recipient: recipientPreferencesSchema,
  intendedMood: z.string().trim().max(300).optional(),
  style: z.string().trim().max(120).optional(),
  budgetMinor: z.number().int().positive().max(100_000_000).optional(),
  items: z.array(hamperSelectionSchema).min(1).max(100),
  packagingOptionId: z.string().max(100).optional(),
  messageText: z.string().max(3000).optional(),
  messagePaperType: z.enum(["REGULAR", "HANDMADE", "PREMIUM_PRINT"]).optional(),
});