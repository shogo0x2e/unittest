import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputAccount from "./input-account";

const user = userEvent.setup();

test("メールアドレス入力欄", async () => {
  render(<InputAccount />);
  const textbox = screen.getByRole("textbox", { name: "メールアドレス" });
  const value = "taro.tanaka@example.com";

  await user.type(textbox, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("パスワード入力欄", async () => {
  render(<InputAccount />);

  // password には ARIA 属性がない (！？)
  // const textbox = screen.getByRole("textbox", { name: "パスワード" });

  const password = screen.getByPlaceholderText("8文字以上で入力");
  const value = "abcd1234";
  await user.type(password, value);

  expect(password).toBeInTheDocument();
});
