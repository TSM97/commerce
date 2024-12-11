import ArticleType from "../../../types/articleType";
import CustomButton from "../../CustomButton";
import useLocale from "../../../hooks/useLocale";
import { useTranslation } from "react-i18next";

export default function Articles({ articles }: { articles: ArticleType[] }) {
  const { dynamicLocale } = useLocale();
  const { t } = useTranslation();
  return (
    <>
      {articles.map((article) => {
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
            key={article?.id}
            className="p-6 flex flex-col lg:flex-row gap-3 bg-white border-gray-800 rounded-lg shadow-md mb-4 lg:h-[300px]"
          >
            <img
              className="object-cover sm:w-1/2 h-[150px] lg:h-[250px] mr-4 none"
              loading="lazy"
              alt="Article's image"
              style={{ borderRadius: "30% 70% 41% 59% / 74% 14% 86% 26%" }}
              src={article?.imageUrl}
            />
            <section className="flex flex-col justify-between w-full overflow-y-hidden">
              <h5
                id="titleID"
                className="mb-2 font-bold md:text-2xl tracking-tight overflow-y-hidden text-base line-clamp-3 md:line-clamp-2"
              >
                {article?.[dynamicLocale(article)]?.title}
              </h5>
              <p
                id="short_DescriptionId"
                className="mb-3 md:text-xl font-normal overflow-y-hidden  text-base line-clamp-6 md:line-clamp-3"
              >
                {article?.[dynamicLocale(article)]?.shortDescription}
              </p>
              <div className="flex w-full items-center md:items-end justify-end md:flex-col flex-row gap-2">
                {article.aTag !== "" ? (
                  <CustomButton
                    elementType="anchorTag"
                    target="_blank"
                    href={article.aTag}
                    ariaLabel={`Read more about ${
                      article?.[dynamicLocale(article)]?.title
                    }`}
                    className="rounded-2xl cursor-pointer border-2 border-dashed border-black bg-white px-2 md:px-6 py-1 md:py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  >
                    Read more
                    <span className="sr-only">
                      Read this article about{" "}
                      {article?.[dynamicLocale(article)]?.title}
                    </span>
                  </CustomButton>
                ) : (
                  <CustomButton
                    elementType="navLink"
                    to={`/article/${article.id}`}
                  >
                    {t("button_read_more")}
                  </CustomButton>
                )}
                <div className="text-end align-bottom md:pt-2">
                  {formattedDate}
                </div>
              </div>
            </section>
          </article>
        );
      })}
    </>
  );
}
