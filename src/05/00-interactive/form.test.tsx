import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./form";

const user = userEvent.setup();

test("「サインアップ」ボタンは非活性", () => {
  render(<Form />);
  expect(screen.getByRole("button", { name: "サインアップ" })).toBeDisabled();
});

test("「利用規約の同意」チェックボックスを押下すると「サインアップ」ボタンは活性化", async () => {
  render(<Form />);
  await user.click(screen.getByRole("checkbox"));
  expect(screen.getByRole("button", { name: "サインアップ" })).toBeEnabled();
});
