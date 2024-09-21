import { render, screen } from "@testing-library/react";
import NotExist from "./NotExist";

test("存在しないことをチェックする", () => {
  render(<NotExist />);

  expect(screen.getByText("Not Exist")).toBeInTheDocument();
  // 存在しない可能性がある場合は .queryByText() を使う
  expect(screen.queryByText("Existing")).not.toBeInTheDocument();
});
