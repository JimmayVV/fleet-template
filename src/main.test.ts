import { expect, test } from "vitest";
import { greet } from "./main";

test("greet", () => {
  expect(greet("fleet")).toBe("Hello, fleet");
});
