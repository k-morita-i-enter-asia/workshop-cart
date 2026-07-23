---
name: prepare-pr
description: 現在の変更を確認し、検証を実行して、チーム規約に沿ったタイトルと本文でPRを作成する。
when_to_use: 変更をPRにしたいとき、PRを作成したいとき、現在の差分をレビューしてPRを出したいときに使う。
---

現在の変更を確認し、問題がなければPRを作成する。

1. `git status --short` と `git diff` を確認する。
2. 公開APIに変更がある場合は、`docs/openapi.yaml` とテストも更新されているか確認する。
3. `npm test` と `npm run build` を実行する。
4. 差分に顧客情報や秘密情報が含まれる場合、PRを作成せずに該当箇所を報告する。
5. テストまたはビルドが失敗した場合、PRを作成せずに失敗内容を報告する。
6. 現在のブランチが `main` の場合は、変更内容に沿った名前で作業ブランチを作り、そこに切り替える。
7. 問題がなければ、次の形式のタイトルと本文でPRを作成する。

タイトルは `<type>(<scope>): <summary> [<git-user>]` とする。`<git-user>` は `git config user.name` の値を使う。

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

PRの作成は次の手順で行う。

1. コミットされていない変更があればコミットし、リモートに push する。
2. 上のタイトルと本文で `gh pr create --title "<title>" --body "<body>"` を実行する。
3. 作成したPRのURLを報告する。