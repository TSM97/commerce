import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import ArticleType from "../../types/articleType";
import { useEffect } from "react";
import { useArticlesStore } from "../../stores/useArticlesStore";
import useLocale from "../../hooks/useLocale";
import CustomButton from "../Common/CustomButton";
import Logo from "../../assets/ATHBees.webp";

export default function ArticlePage() {
  const { articles } = useArticlesStore();
  const { id } = useParams<{ id: string }>(); // Extracting `id` from URL params
  const { dynamicLocale } = useLocale();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  //While fetching articles on reload!
  if (!articles.length) {
    return (
      <section className="min-h-screen flex items-center justify-center border-b-4 border-dashed border-primary-100 ">
        <img src={Logo} className="h-full" />
      </section>
    );
  }

  //find specific article based on the id tha passed to url
  const article: ArticleType | null =
    articles.find((article) => article?.id === id) ?? null;

  //if specific article doesnt exist
  if (!article)
    return (
      <section className="min-h-screen flex flex-col items-center justify-center border-b-4 border-dashed border-primary-100 ">
        <img src={Logo} className="h-full" />
        <div className="text-3xl">No article with this ID Found...!</div>
      </section>
    );

  // Manually converting Firestore Timestamp to JavaScript Date\
  const timestamp = article.createdAt;
  const date = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );

  // Format the date
  const formattedDateTime = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  //keep track of the locale
  const locale = dynamicLocale(article);

  return (
    <section
      id="footerWraper"
      className="w-screen border-b-4 border-dashed border-primary-100 "
    >
      <section className="container mx-auto pt-[13vh] min-h-screen">
        <article>
          <div className="flex flex-col items-start w-full pt-[2dvw] pb-[2dvw]">
            <h1 className="min-w-[50%] lg:max-w-[80%] text-3xl lg:text-6xl border-2 border-t-0 border-l-0 border-r-0 border-b-black">
              {article?.[locale]?.title}
            </h1>
            <h5 className="text-xl">{formattedDateTime}</h5>
          </div>
        </article>
        <img
          src={article?.imageUrl}
          alt={`${article?.[locale]?.title} image`}
          className="object-cover xl:max-w-[70dvw] max-w-full max-h-[70vh] pb-[2dvw]"
        />
        <article className="lg:max-w-[80%] text-[1.3rem]">
          {article?.[locale]?.fullDescription.plainText && (
            //! sanitize from DOMPurify to prevent xss attacks using dangerslyInnerHTML
            <div
              className="[&_a]:!text-honey [&_a]:underline [&_a]:!hover:text-honey [&_a]:cursor-pointer"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  article?.[locale]?.fullDescription.html
                ),
              }}
            />
          )}
          {article?.[locale]?.contactButtonTitle && (
            <div className=" my-10">
              <CustomButton
                elementType="navLink"
                className="bg-white-default capitalize text-md"
                to={`/#Contact`}
              >
                {article?.[locale]?.contactButtonTitle}
              </CustomButton>
            </div>
          )}
        </article>
      </section>
    </section>
  );
}
