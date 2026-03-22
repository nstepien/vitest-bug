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
      instances: [{ browser: "chromium" }, { browser: "firefox" }, { browser: "webkit" }],
    },
  },
});
