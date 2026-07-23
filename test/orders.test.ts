import { describe, expect, it } from "vitest";
import { toOrderListItem, type OrderRecord } from "../src/orders.js";

const order: OrderRecord = {
  id: "order-1001",
  customerEmail: "buyer@example.com",
  itemTotalCents: 12000,
  shippingFeeCents: 500,
};

describe("toOrderListItem", () => {
  it("通常の配送料を含む注文を変換する", () => {
    expect(toOrderListItem(order)).toEqual({
      id: "order-1001",
      itemTotalCents: 12000,
      shippingFeeCents: 500,
      totalCents: 12500,
    });
  });

  it("配送料が 0 の注文を変換する", () => {
    const freeShipping: OrderRecord = {
      id: "order-1002",
      customerEmail: "buyer@example.com",
      itemTotalCents: 8000,
      shippingFeeCents: 0,
    };
    expect(toOrderListItem(freeShipping)).toEqual({
      id: "order-1002",
      itemTotalCents: 8000,
      shippingFeeCents: 0,
      totalCents: 8000,
    });
  });

  it("顧客情報を含めずに変換する", () => {
    const result = toOrderListItem(order);
    expect(result).not.toHaveProperty("customerEmail");
    expect(Object.values(result)).not.toContain(order.customerEmail);
  });
});
