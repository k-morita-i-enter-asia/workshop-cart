export interface OrderRecord {
  id: string;
  customerEmail: string;
  itemTotalCents: number;
  shippingFeeCents: number;
}

/** 注文一覧 API で返す、顧客情報を含まない注文の要約。 */
export interface OrderListItem {
  id: string;
  itemTotalCents: number;
  totalCents: number;
}

/** 内部の注文データを、注文一覧 API のレスポンスへ変換する。 */
export function toOrderListItem(order: OrderRecord): OrderListItem {
  return {
    id: order.id,
    itemTotalCents: order.itemTotalCents,
    totalCents: order.itemTotalCents + order.shippingFeeCents,
  };
}
