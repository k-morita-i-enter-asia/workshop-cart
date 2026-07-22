---
name: prepare-pr
description: 変更を確認し、検証を実行して、
  規約に沿ったPRタイトルと本文を作成する。
when_to_use: PRを出す前に変更を確認したいとき、
  PRタイトルや本文を作りたいときに使う。
---

1. git status と git diff を確認する
2. npm test と npm run build を実行する
3. 問題なければ PR本文の下書きを作る