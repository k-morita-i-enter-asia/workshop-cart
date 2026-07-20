# workshop-cart

Claude Code 勉強会用のサンプルです。

小さなカート計算ライブラリと、注文一覧 API の契約を扱います。

## セットアップ

    npm install
    npm test
## 動作環境

- Node.js 20 以上

## 主なファイル

- `src/cart.ts`: カートの金額計算
- `src/orders.ts`: 注文一覧 API のレスポンス組み立て
- `docs/openapi.yaml`: 注文一覧 API の公開契約

> 注: 配布時点では第1回用のバグによりテストが失敗します。第1回のハンズオンで原因を見つけて修正します。
