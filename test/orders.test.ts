import { describe, expect, it } from "vitest";
import { toOrderListItem, type OrderRecord } from "../src/orders.js";

const order: OrderRecord = {
  id: "order-1001",
  customerEmail: "buyer@example.com",
  itemTotalCents: 12000,
  shippingFeeCents: 500,
};

const freeShippingOrder: OrderRecord = {
  id: "order-1002",
  customerEmail: "buyer2@example.com",
  itemTotalCents: 8000,
  shippingFeeCents: 0,
};

describe("toOrderListItem", () => {
  it("通常の配送料がある注文一覧用の値へ変換する", () => {
    expect(toOrderListItem(order)).toEqual({
      id: "order-1001",
      itemTotalCents: 12000,
      shippingFeeCents: 500,
      totalCents: 12500,
    });
  });

  it("配送料が0円の注文一覧用の値へ変換する", () => {
    expect(toOrderListItem(freeShippingOrder)).toEqual({
      id: "order-1002",
      itemTotalCents: 8000,
      shippingFeeCents: 0,
      totalCents: 8000,
    });
  });

  it("顧客情報を含めない", () => {
    const result = toOrderListItem(order);
    expect(result).not.toHaveProperty("customerEmail");
    expect(Object.keys(result).sort()).toEqual(
      ["id", "itemTotalCents", "shippingFeeCents", "totalCents"].sort(),
    );
  });
});
