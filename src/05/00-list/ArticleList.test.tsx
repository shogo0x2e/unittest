import { render, screen, within } from "@testing-library/react";
import ArticleList, { testId } from "./ArticleList";
import { items } from "./fixture";

test("items の数だけ一覧表示される", () => {
  render(<ArticleList articles={items} />);

  const list = screen.getByTestId(testId.articleList);
  expect(within(list).getAllByRole("listitem")).toHaveLength(3);
  expect(screen.queryByText("記事がありません")).not.toBeInTheDocument();
});

test("0 件の場合は何も表示されない", () => {
  render(<ArticleList articles={[]} />);
  expect(screen.queryByTestId(testId.articleList)).not.toBeInTheDocument();
  expect(screen.getByText("記事がありません")).toBeInTheDocument();
});
