import { test } from "vitest";
import { server, userEvent } from "vitest/browser";

test.each(Array.from({ length: 500 }))(`${server.browser}: keyboard %#`, async () => {
  await userEvent.keyboard("a");
});
