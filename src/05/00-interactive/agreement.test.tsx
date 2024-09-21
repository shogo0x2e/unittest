import { render, screen } from "@testing-library/react";
import Agreement from "./agreement";

test("fieldset のアクセシブルネームは legend を引用している", () => {
  render(<Agreement />);
  expect(
    screen.getByRole("group", { name: "利用規約の同意" })
  ).toBeInTheDocument();
});

test("チェックボックスはチェックが入っていない", () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});
