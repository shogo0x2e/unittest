import { timeout, wait } from ".";

test("指定時間で resolve される", async () => {
  await expect(wait(50)).resolves.toBe(50);
})

test("指定時間で reject される", async () => {
  expect(timeout(50)).rejects.toBe(50);
})
