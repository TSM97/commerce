import { useState } from "react";

import Articles from "./Articles";
import { ITEMS_PER_PAGE } from "../../../config";
import Pagination from "./Pagination";
import { useArticlesStore } from "../../../stores/useArticlesStore";

export default function RightPartial() {
  const [currentPage, setCurrentPage] = useState(1);
  const { articles, loading, totalPages } = useArticlesStore();

  const indexOfLastArticle = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ITEMS_PER_PAGE;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <article className="flex flex-col justify-between text-left h-full p-4 w-[80dvw] xl:w-[40dvw]  md:text-md text-sm z-10">
      {!loading ? (
        <>
          <article>
            <header className="font-bold text-3xl pb-4">News</header>
            <Articles articles={currentArticles} />
          </article>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        <></> //Should make a skeleton component here!
      )}
    </article>
  );
}
