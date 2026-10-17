import { expect, it } from "vitest";

it("keeps browser abort globals compatible with Node's Request", () => {
  const controller = new AbortController();
  const request = new Request("http://localhost/test", { signal: controller.signal });
  const reason = new Error("Navigation cancelled");

  expect(controller.signal).toBeInstanceOf(AbortSignal);
  expect(request.signal).toBeInstanceOf(AbortSignal);
  expect(request.signal.aborted).toBe(false);

  controller.abort(reason);

  expect(request.signal.aborted).toBe(true);
  expect(request.signal.reason).toBe(reason);
});
