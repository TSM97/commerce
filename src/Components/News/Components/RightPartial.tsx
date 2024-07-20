import News1 from "../../../assets/News1.webp";
import News2 from "../../../assets/News2.webp";

export default function RightPartial() {
  return (
    <article className="text-left h-full p-4 max-w-[40vw]">
      <header className="font-bold text-3xl pb-4">News</header>
      <div>
        <div className="p-6 flex border-gray-800 rounded-lg shadow-md mb-4">
          <img
            className="object-cover w-1/2 mr-4"
            alt="article image"
            style={{ borderRadius: "30% 70% 41% 59% / 74% 14% 86% 26%" }}
            src={News1}
          />
          <section>
            <a href="#">
              <h5 className="mb-2 font-bold tracking-tight">
                Lorem ipsum dolor sit amet consectetur.
              </h5>
            </a>
            <p className="mb-3 font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate explicabo nisi ipsam!
            </p>
            <div className="flex w-full justify-end">
              <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                Read more
              </button>
            </div>
          </section>
        </div>
        <div className="p-6 flex border-gray-800 rounded-lg shadow-md mb-4">
          <img
            className="object-cover w-1/2 mr-4"
            alt="article image"
            style={{ borderRadius: "30% 70% 41% 59% / 74% 14% 86% 26%" }}
            src={News2}
          />
          <section>
            <a href="#">
              <h5 className="mb-2 font-bold tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h5>
            </a>
            <p className="mb-3 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aut corporis ratione quod. Quas, neque?
            </p>
            <div className="flex w-full justify-end">
              <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                Read more
              </button>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
