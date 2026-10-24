# Vitest bug repro

Repro for [vitest-dev/vitest#9941](https://github.com/vitest-dev/vitest/issues/9941): console logs in one browser make actions in other browsers time out.

## Quick start

1. `npm ci`
2. `npx playwright install`
3. Run tests
   - `npm test` - all browsers spamming the console while running all the tests
   - `npm run test:across` - one browser spamming the console, other browsers run the tests
4. Comment out the `console.log();` line in `test/spam.test.ts` and run the tests again:
   - Actions do not time out anymore

## Results

With Vitest 5.0.5, Playwright 1.64.1, and Node.js 26.12.1 on Windows 11 (32 threads), the actions fail with `Test timed out in 500ms`:

| Command               | With `console.log();`    | Without             |
| --------------------- | ------------------------ | ------------------- |
| `npm test`            | 546 of 4503 tests fail   | all 4503 tests pass |
| `npm run test:across` | 55–88 of 3001 tests fail | all 3001 tests pass |
