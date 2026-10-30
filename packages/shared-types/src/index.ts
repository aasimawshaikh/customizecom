export type Occasion =
  | "BIRTHDAY"
  | "ANNIVERSARY"
  | "WEDDING"
  | "GRADUATION"
  | "CONGRATULATIONS"
  | "JUST_BECAUSE"
  | "OTHER";

export type RecipientRelationship =
  | "PARTNER"
  | "HER"
  | "HIM"
  | "FRIEND"
  | "PARENT"
  | "CHILD"
  | "COLLEAGUE"
  | "OTHER";

export interface RecipientPreferences {
  name?: string;
  relationship?: RecipientRelationship;
  interests: string[];
  avoidances: string[];
}

export interface Money {
  /** Integer minor units; INR values are stored in paise. */
  amountMinor: number;
  currency: "INR";
}

export interface HamperSelection {
  productId: string;
  quantity: number;
}

export interface HamperDraft {
  occasion: Occasion;
  recipient: RecipientPreferences;
  intendedMood?: string;
  style?: string;
  budget?: Money;
  items: HamperSelection[];
  packagingOptionId?: string;
  messageText?: string;
  messagePaperType?: "REGULAR" | "HANDMADE" | "PREMIUM_PRINT";
  digitalGreeting?: {
    enabled: boolean;
    message?: string;
    photoAssetIds?: string[];
  };
}

export interface PriceBreakdown {
  products: Money;
  packaging: Money;
  personalization: Money;
  tax: Money;
  delivery: Money;
  total: Money;
}
