import { useEffect, useState } from "react";

import ArticleType from "../../../types/articleType";
import fetchArticles from "../utils/fetchArticles";
import Articles from "./Articles";

export default function RightPartial() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetchArticles(setArticles);
  }, []);

  return (
    <article className="text-left h-full p-4 w-[80dvw] xl:w-[40dvw]  md:text-md text-sm z-10">
      <header className="font-bold text-3xl pb-4">News</header>
      <Articles articles={articles} />
    </article>
  );
}
