import { test } from "vitest";
import { server, userEvent } from "vitest/browser";

test.each(Array.from({ length: 500 }))(`${server.browser}: hover %#`, async () => {
  await userEvent.hover(document.body);
});
