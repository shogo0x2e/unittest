import { add } from ".";

test("合計の上限は、'100' である", () => {
  expect(add(-10, 110)).toBe(100);
})
