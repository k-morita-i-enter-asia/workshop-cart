import { describe, expect, it } from "vitest";
import { toOrderListItem, type OrderRecord } from "../src/orders.js";

const order: OrderRecord = {
  id: "order-1001",
  customerEmail: "buyer@example.com",
  itemTotalCents: 12000,
  shippingFeeCents: 500,
};

describe("toOrderListItem", () => {
  it("顧客情報を含めずに注文一覧用の値へ変換する", () => {
    expect(toOrderListItem(order)).toEqual({
      id: "order-1001",
      itemTotalCents: 12000,
      shippingFeeCents: 500,
      totalCents: 12500,
    });
  });
});
