# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a tiny sample repo for a Claude Code workshop (勉強会), written in Japanese. It contains a small shopping-cart calculation library and the response-building logic for an order-list API, backed by an OpenAPI contract.

## Commands

- `npm install` — install dependencies
- `npm test` — run the full test suite once (vitest run)
- `npm run test:watch` — run tests in watch mode
- `npm run build` — type-check and compile via `tsc` (output to `dist/`)
- Run a single test file: `npx vitest run test/cart.test.ts`
- Run tests matching a name: `npx vitest run -t "割引"`

Node.js >= 20 is required. Modules are ESM (`"type": "module"`); source imports use explicit `.js` extensions (e.g. `import { subtotalCents } from "../src/cart.js"`) even though the source files are `.ts`, since `moduleResolution` is `Bundler`.

## Architecture

- [src/cart.ts](src/cart.ts) — cart math: `subtotalCents` (price × quantity sum), `applyDiscount` (percentage discount), `totalCents` (subtotal → discount → 10% tax, in that order). All money is handled as integer cents to avoid floating-point error.
- [src/orders.ts](src/orders.ts) — `toOrderListItem` converts an internal `OrderRecord` (which includes `customerEmail`) into the public `OrderListItem` shape (which deliberately excludes customer PII and adds `shippingFeeCents` into `totalCents`).
- [docs/openapi.yaml](docs/openapi.yaml) — the public contract for the `/orders` endpoint; `OrderListItem` here must stay in sync with the `OrderListItem` interface in `src/orders.ts`.
- Tests in `test/` mirror `src/` one-to-one and are the executable spec for expected behavior.
