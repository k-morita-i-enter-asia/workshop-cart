---
name: prepare-pr-daitv
description: Review the current changes, run verification, and open a pull request with a title and body that follow the team's conventions. Use this when the user wants to turn their changes into a PR, wants a PR opened, or wants the current diff reviewed before submitting a PR.
---

Review the current changes and, if everything checks out, open a pull request.

1. Check `git status --short` and `git diff`.
2. If the change touches the public API, confirm `docs/openapi.yaml` and the tests have been updated accordingly.
3. Run `npm test` and `npm run build`.
4. If the diff contains customer data or secrets, do not open a PR — report the offending location instead.
5. If the tests or build fail, do not open a PR — report the failure details instead.
6. If the current branch is `main`, create a working branch named after the change and switch to it.
7. If everything checks out, open a PR with the title and body format below.

The title must be `<type>(<scope>): <summary> [<git-user>]`. `<git-user>` is the value of `git config user.name`.

`type` must be one of `feat`, `fix`, `refactor`, `docs`, `test`, `chore`.

The body must use the following template:

```markdown
## Summary
- 1-3 bullet points describing the change

## Tests
- Commands run and their results

## API / Compatibility
- Impact on the API, OpenAPI contract, or compatibility
- If there is no impact, write `No API or compatibility impact.`

## Notes for reviewers
- Points that need attention or decisions you were unsure about
```

Follow these steps to open the PR:

1. Commit any uncommitted changes and push to the remote.
2. Run `gh pr create --title "<title>" --body "<body>"` with the title and body above.
3. Report the URL of the created PR.
