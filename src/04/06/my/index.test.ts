import { checkLength } from ".";
import * as Fetchers from "../..//fetchers";
import { postMyArticle } from "../../fetchers";
import { httpError, postMyArticleData } from "../../fetchers/fixtures";
import { ArticleInput } from "../../fetchers/type";

jest.mock("../fetchers");

function mockPostMyArticle(input: ArticleInput, status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }

  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockResolvedValue({ ...postMyArticleData, ...input });
  } catch (err) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }

}

function inputFactory(input?: Partial<ArticleInput>): ArticleInput {
  return {
    tags: ["testing"],
    title: "TypeScript を使ったテストの書き方",
    body: "テストを書くとき、TypeScript を使うことで、テストの保守性が向上します。",
    ...input,
  }
}

test("バリデーションに成功した場合、成功レスポンスが返る", async () => {
  const input = inputFactory();
  // 入力値を含んだ成功レスポンスが返るようにモックする
  const mock = mockPostMyArticle(input);
  // テスト対象の関数に input を与える
  const data = await postMyArticle(input);
  // 取得したデータに、入力内容が含まれているか検証
  expect(data).toMatchObject(expect.objectContaining(input));
  // モックが呼び出されたか検証
  expect(mock).toHaveBeenCalled();
})
