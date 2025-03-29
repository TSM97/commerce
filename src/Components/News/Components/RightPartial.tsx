import { useEffect, useState } from "react";

import Articles from "./Articles";
import { ITEMS_PER_PAGE } from "../../../config";
import Pagination from "./Pagination";
import { useArticlesStore } from "../../../stores/useArticlesStore";
import FilterChip from "../../Common/FilterChip/FilterChip";
import filterType from "../../../types/filterType";
import { articleFilterUtil } from "../utils/articleFilterUtil";

export default function RightPartial() {
  const [currentPage, setCurrentPage] = useState(1);
  const { articles, loading } = useArticlesStore();
  const [articleFilter, setArticleFilter] = useState<filterType>([
    "Article",
    "Experience",
  ]);

  const filteredArticles = articles.filter((article) => {
    return (
      article.articleType &&
      Array.isArray(article.articleType) &&
      article.articleType.some((type) => articleFilter.includes(type))
    );
  });
  const calculatedTotalPages = Math.ceil(
    filteredArticles.length / ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [articleFilter]);

  const indexOfLastArticle = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ITEMS_PER_PAGE;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <article className="flex flex-col justify-between text-left h-full p-4 w-[90dvw] md:w-[80dvw] xl:w-[40dvw]  md:text-md text-sm z-10">
      {!loading ? (
        <>
          <article className="w-full">
            <header className="font-bold text-3xl pb-4 sm:flex justify-between">
              <span className=" font-lobster tracking-wider">
                From the Hive
              </span>
              {/* Filter */}
              <div className="flex gap-1">
                <FilterChip
                  onClick={() =>
                    articleFilterUtil(
                      articleFilter,
                      setArticleFilter,
                      "Experience"
                    )
                  }
                  className={`${
                    articleFilter.includes("Experience") ? "!bg-primary" : ""
                  } cursor-pointer`}
                >
                  Experiences
                </FilterChip>
                <FilterChip
                  onClick={() =>
                    articleFilterUtil(
                      articleFilter,
                      setArticleFilter,
                      "Article"
                    )
                  }
                  className={`${
                    articleFilter.includes("Article") ? "!bg-primary" : ""
                  } cursor-pointer`}
                >
                  Articles
                </FilterChip>
              </div>
            </header>
            <Articles articles={currentArticles} />
          </article>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={calculatedTotalPages}
          />
        </>
      ) : (
        <></> //Should make a skeleton component here!
      )}
    </article>
  );
}
