import { add } from "./";

// 署名チェック, 内容は無関係でこの行は消して OK

describe("四則演算", () => {
  describe("add", () => {
    test("1 + 1 は 2", () => {
      expect(add(1, 1)).toBe(2);
    });
  });
});
