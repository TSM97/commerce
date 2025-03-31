import { ATHENIAN_EMAIL } from "../../config";
import SmallDev from "../../svgs/SmallDev";
import Links from "./Components/Links";

export default function FooterDetails() {
  return (
    <section className="flex flex-col h-full justify-between p-2 pt-6">
      <section className="flex gap-3 lg:flex-row flex-col justify-between px-[3vw] ">
        <div className="lg:w-[35%] text-black-100 text-justify text-md">
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            enim praesentium quis libero reprehenderit perferendis a repellendus
            odit mollitia placeat facere eligendi ab! Ducimus dolorum numquam
            saepe repellendus voluptas accusantium? Iste voluptatum aspernatur
            adipisci excepturi similique delectus quibusdam. Ullam tempore
            nulla, voluptates recusandae, deleniti delectus quas et ipsam
            corporis iure sapiente alias beatae aliquid laborum! Quam aut neque
            facere impedit?
          </i>
        </div>
        <section className="lg:text-lg tracking-wide text-black-100">
          <div className="pb-2">
            <i>Συχνές Ερωτήσεις</i>
          </div>
          <div className="pb-2">
            <i>Email:{ATHENIAN_EMAIL}</i>
          </div>
          <div className="pb-2">
            <i>Τηλέφωνο:</i>
          </div>
        </section>

        <div className="flex-col flex items-end ">
          <Links />
        </div>
      </section>

      <div className="sm:flex justify-between">
        <div className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl tracking-wide font-extrabold text-primary-250 select-none">
          ATHENIAN BEES
        </div>
        <div className="text-sm text-black-250 italic self-end flex items-center gap-1">
          <div>© 2025 - Crafted with care</div>
          <a target="_blank" href="https://tsm97.github.io/portfolioReact/">
            <SmallDev className="fill-primary-250 hover:fill-black-100 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
