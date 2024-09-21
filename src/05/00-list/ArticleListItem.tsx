export type ArticleItem = {
  id: string;
  content: string;
};

type Props = {
  article: ArticleItem;
};

const ArticleListItem = ({ article }: Props) => {
  return (
    <li>
      <p>{article.id}</p>
      <p>{article.content}</p>
      <a href={`/articles/${article.id}`}>もっとみる</a>
    </li>
  );
};

export default ArticleListItem;
