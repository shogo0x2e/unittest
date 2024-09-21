import { render, screen } from "@testing-library/react";
import Simple from "./Simple";

test("名前の表示", () => {
  render(<Simple />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
})
