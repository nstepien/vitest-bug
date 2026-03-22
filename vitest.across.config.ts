import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  test: {
    // `userEvent.keyboard` does not respect `actionTimeout`?
    testTimeout: 500,
    browser: {
      enabled: true,
      headless: true,
      ui: false,
      screenshotFailures: false,
      provider: playwright({ actionTimeout: 500 }),
    },
    projects: [
      {
        extends: true,
        test: {
          name: "spam",
          include: ["test/spam.test.ts"],
          browser: {
            instances: [{ browser: "chromium" }],
          },
        },
      },
      {
        extends: true,
        test: {
          name: "click",
          exclude: ["test/spam.test.ts"],
          browser: {
            instances: [{ browser: "firefox" }, { browser: "webkit" }],
          },
        },
      },
    ],
  },
});
