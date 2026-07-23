export interface CartItem {
  name: string;
  /** 単価。整数のセントで持つ(例: $120.00 は 12000)。 */
  priceCents: number;
  quantity: number;
}

/** カート内の小計(セント)。price × quantity の合計。 */
export function subtotalCents(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
}

/**
 * 小計に割引を適用する。
 * discountPercent は整数のパーセント(例: 10 は「10%オフ」)。
 */
export function applyDiscount(subtotal: number, discountPercent: number): number {
  return subtotal * (1 - discountPercent / 100);
}

const TAX_RATE = 0.1; // 10% の消費税

/** 税込み合計(セント)。小計 → 割引 → 税、の順で計算する。 */
export function totalCents(items: CartItem[], discountPercent: number): number {
  const sub = subtotalCents(items);
  const discounted = applyDiscount(sub, discountPercent);
  return Math.round(discounted * (1 + TAX_RATE));
}
