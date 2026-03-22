import { test } from "vitest";

test("spam the console", { timeout: 2600 }, () => {
  const timeout = Date.now() + 2500;

  while (timeout > Date.now()) {
    console.log();
  }
});
