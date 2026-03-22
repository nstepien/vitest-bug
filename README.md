# Vitest bug repro

## Quick start

1. `npm ci`
2. `npx playwright install`
3. Run tests
   - `npm test` - all browsers spamming the console while running all the tests
   - `npm run test:across` - one browser spamming the console, other browsers run the tests
4. Comment out the `console.log();` line in `test/spam.test.ts` and run the tests again:
   - Actions do not timeout anymore
