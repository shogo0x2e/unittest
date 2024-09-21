import { render, screen } from "@testing-library/react";
import ArticleListItem, { ArticleItem } from "./ArticleListItem";

const article: ArticleItem = {
  id: "0000",
  content: "some-content",
};

test("リンクが正しい", () => {
  render(<ArticleListItem article={article} />);
  expect(screen.getByRole("link", { name: "もっとみる" })).toHaveAttribute(
    "href",
    `/articles/${article.id}`
  );
});
