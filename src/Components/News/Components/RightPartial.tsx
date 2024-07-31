import { useEffect, useState } from "react";

import Image1 from "../../../assets/News1.webp";
import { useNavigate } from "react-router-dom";
import ArticleType from "../../../types/articleType";
import fetchArticles from "../utils/fetchArticles";

export default function RightPartial() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const handleReadMore = (article: ArticleType) => {
    navigate(`/article/${article.id}`, { state: { article } });
  };

  useEffect(() => {
    fetchArticles(setArticles);
  }, []);

  return (
    <article className="text-left h-full p-4 w-[80dvw] xl:w-[40dvw]  md:text-md text-sm z-10">
      <header className="font-bold text-3xl pb-4">News</header>
      {articles.map((article, key) => {
        //format date in order to show to NewsMini
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(article?.createdAt?.toDate());

        return (
          <article
            key={`${article}${key}`}
            className="p-6 flex flex-col lg:flex-row gap-3 bg-white border-gray-800 rounded-lg shadow-md mb-4 h-fit min-h-[300px]"
          >
            <img
              className="object-cover w-full lg:h-[250px] sm:w-1/2 mr-4 none"
              loading="lazy"
              alt="Article's image"
              style={{ borderRadius: "30% 70% 41% 59% / 74% 14% 86% 26%" }}
              src={article?.imageUrl}
            />
            <section className="flex flex-col justify-between w-full">
              <h5 className="mb-2 font-bold md:text-2xl tracking-tight">
                {article?.title}
              </h5>
              <p className="mb-3 md:text-xl font-normal">
                {article?.shortDescription}
              </p>
              <div className="flex w-full items-end justify-end md:flex-col flex-row gap-2">
                {article.aTag !== "" ? (
                  <a
                    target="_blank"
                    href={article.aTag}
                    className="rounded-2xl cursor-pointer border-2 border-dashed border-black bg-white px-2 md:px-6 py-1 md:py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  >
                    Read more
                  </a>
                ) : (
                  <button
                    onClick={() => handleReadMore(article)}
                    className="rounded-2xl cursor-pointer border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  >
                    Read more
                  </button>
                )}
                <div className="text-end align-bottom pt-2">
                  {formattedDate}
                </div>
              </div>
            </section>
          </article>
        );
      })}
    </article>
  );
}
