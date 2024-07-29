import { useLocation } from "react-router-dom";

import ArticleType from "../../types/articleType";
import { useEffect } from "react";

export default function ArticlePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const location = useLocation();
  const { article }: { article: ArticleType } = location.state || {}; // Access the article data from state
  console.log(article?.fullDescription);
  return (
    <section className="container mx-auto pt-[13dvh] min-h-screen">
      <article>
        <div className="flex flex-col items-start w-full pt-[4dvw] pb-[3dvw]">
          <h1 className="min-w-[50%] lg:max-w-[80%] text-3xl lg:text-6xl border-2 border-t-0 border-l-0 border-r-0 border-b-black">
            {article?.title}
          </h1>
          <h5 className="text-xl">27/7/2023</h5>
        </div>
      </article>
      <article className="lg:max-w-[80%]">
        {article?.fullDescription?.split("||")?.map((paragraph) => {
          return (
            <>
              <p className="first-letter:uppercase text-[1.1rem]">
                {paragraph}
              </p>
              <br />
            </>
          );
        })}
      </article>
    </section>
  );
}
