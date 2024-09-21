import ArticleListItem, { ArticleItem } from "./ArticleListItem";

export const testId = {
  articleList: "articleList",
  nextList: "nextList",
} as const;

type Props = {
  articles: ArticleItem[];
};

const ArticleList = ({ articles }: Props) => {
  return (
    <div>
      {articles.length > 0 ? (
        <ul data-testid={testId.articleList}>
          {articles.map((article) => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </ul>
      ) : (
        <p>記事がありません</p>
      )}
      <ul>
        <li>Another Element</li>
      </ul>
    </div>
  );
};

export default ArticleList;
