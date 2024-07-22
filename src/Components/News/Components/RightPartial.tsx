import { articleData } from "../data";

export default function RightPartial() {
  return (
    <article className="text-left h-full p-4 max-w-[80dvw] md:max-w-[40dvw]">
      <header className="font-bold text-3xl pb-4">News</header>
      {articleData.map((article, key) => {
        return (
          <div
            key={`${article}${key}`}
            className="p-6 flex flex-col lg:flex-row gap-3 bg-white border-gray-800 rounded-lg shadow-md mb-4"
          >
            <img
              className="object-cover lg:w-1/2 mr-4 none"
              alt="article image"
              style={{ borderRadius: "30% 70% 41% 59% / 74% 14% 86% 26%" }}
              src={article.Image}
            />
            <section className="flex flex-col justify-between">
              <a href="#">
                <h5 className="mb-2 font-bold text-xl tracking-tight">
                  {article.Title}
                </h5>
              </a>
              <p className="mb-3 font-normal">{article.Description}</p>
              <div className="flex w-full justify-end">
                <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  Read more
                </button>
              </div>
              <div className="text-end align-bottom pt-2">{article.Date}</div>
            </section>
          </div>
        );
      })}
    </article>
  );
}
