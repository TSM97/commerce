import { useEffect, useState } from "react";

import ArticleType from "../../../types/articleType";
import fetchArticles from "../utils/fetchArticles";
import Articles from "./Articles";
import { ITEMS_PER_PAGE } from "../../../config";
import Pagination from "./Pagination";

export default function RightPartial() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchArticles(setArticles, setTotalPages);
  }, []);

  const indexOfLastArticle = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ITEMS_PER_PAGE;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <article className="flex flex-col justify-between text-left h-full p-4 w-[80dvw] xl:w-[40dvw]  md:text-md text-sm z-10">
      <article>
        <header className="font-bold text-3xl pb-4">News</header>
        <Articles articles={currentArticles} />
      </article>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </article>
  );
}
