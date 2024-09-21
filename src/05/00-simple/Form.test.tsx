import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

test("ボタンを押下すると、イベントハンドラーが実行される", () => {
  const mockFn = jest.fn();
  render(<Form name="taro" onSubmit={mockFn} />);

  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
});
