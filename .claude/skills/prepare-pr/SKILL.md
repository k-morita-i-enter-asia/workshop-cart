---
name: prepare-pr
description: 現在の変更を確認し、検証を実行して、チーム規約に沿ったPRタイトルと本文を作成する。
when_to_use: PRを作成する前に変更を確認したいとき、PRタイトルや本文を作りたいとき、現在の差分をレビューしたいときに使う。
disable-model-invocation: false
---

現在の変更を確認し、PRを出せる状態かを確認する。ファイルの変更は行わない。

1. `git status --short` と `git diff` を確認する。
2. 公開APIに変更がある場合は、`docs/openapi.yaml` とテストも更新されているか確認する。
3. `npm test` と `npm run build` を実行する。
4. 差分に顧客情報や秘密情報が含まれる場合、PR本文を作らずに該当箇所を報告する。
5. テストまたはビルドが失敗した場合、PR本文を作らずに失敗内容を報告する。
6. 問題がなければ、次の形式でPRタイトルと本文の下書きを作る。

タイトルは `<type>(<scope>): <summary>` とする。

`type` は `feat`、`fix`、`refactor`、`docs`、`test`、`chore` のいずれかを使う。

本文は次のテンプレートを使う。

```markdown
## Summary
- 変更内容を1〜3項目で書く

## Tests
- 実行したコマンドと結果を書く

## API / Compatibility
- API・OpenAPI・互換性への影響を書く
- 影響がなければ `No API or compatibility impact.` と書く

## Notes for reviewers
- 確認してほしい点、判断に迷った点を書く
```