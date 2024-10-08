import { getMyArticleLinksByCategory } from ".";
import * as Fetchers from "../fetchers";
import { getMyArticlesData, httpError } from "../fetchers/fixtures";

jest.mock("../fetchers");

const mockGetMyArticles = (status = 200) => {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "getMyArticles")
      .mockRejectedValueOnce(httpError);
  }
  return jest
    .spyOn(Fetchers, "getMyArticles")
    .mockResolvedValueOnce(getMyArticlesData);
}

test("指定したタグを持つ記事が一件もない場合、null が返る", async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory("playwright");
  expect(data).toBeNull();
});

test("指定したタグを持つ記事が 1 件以上ある場合、リンク一覧が返る", async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory("testing");
  expect(data).toMatchObject([
    {
      link: "/articles/howto-testing-with-typescript",
      title: "TypeScript を使ったテストの書き方",
    },
    {
      link: "/articles/react-component-testing-with-jest",
      title: "Jest ではじめる React のコンポーネントテスト"
    }
  ]);
})

test("データ取得に失敗した場合、reject される", async () => {
  mockGetMyArticles(500);

  await getMyArticleLinksByCategory("testing").catch((err) => {
    expect(err).toMatchObject({
      err: { message: "internal server error" },
    })
  })
})

test("test", async () => {
  const mockFn = jest.fn();

  const getMyArticles = async () => {
    
    mockFn();

    return {
      articles: [],
    };
  }

  jest.spyOn(Fetchers, "getMyArticles").mockImplementation(getMyArticles);
  const data = await getMyArticleLinksByCategory("testing");
  expect(data).toBeNull();
  expect(mockFn).toHaveBeenCalledTimes(1);
});
