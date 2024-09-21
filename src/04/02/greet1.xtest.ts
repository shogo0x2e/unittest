import { greet } from "./greet";

jest.mock("./greet")

test("挨拶を返さない", () => {
  expect(greet("Taro")).toBe(undefined);
})
