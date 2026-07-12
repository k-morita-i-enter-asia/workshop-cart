import { describe, it, expect } from "vitest";
import { subtotalCents, applyDiscount, totalCents, type CartItem } from "../src/cart.js";

const cart: CartItem[] = [
  { name: "Keyboard", priceCents: 12000, quantity: 1 }, // $120.00 × 1
  { name: "Mouse", priceCents: 4000, quantity: 2 },     // $40.00 × 2
];

describe("subtotalCents", () => {
  it("price × quantity を合計する", () => {
    expect(subtotalCents(cart)).toBe(20000); // 12000 + 8000
  });
});

describe("applyDiscount", () => {
  it("小計に 10% の割引を適用する", () => {
    // 20000 セントの 10%オフ = 18000 セント
    expect(applyDiscount(20000, 10)).toBe(18000);
  });
});

describe("totalCents", () => {
  it("割引後に 10% の税を足す", () => {
    // 18000 の税込み = 19800
    expect(totalCents(cart, 10)).toBe(19800);
  });
});
