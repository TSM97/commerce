import SmallDev from "../../svgs/SmallDev";
import Logo from "../../assets/ATHBees.webp";

export default function FooterDetails() {
  return (
    <section className="flex flex-col h-full justify-between p-2">
      <div>as</div>
      <div className="self-end mx-auto">
        <img
          src={Logo}
          className="h-[130px] object-contain"
          alt="AthenianBees Logo"
        />
      </div>
      <div className="flex justify-between">
        <div className="text-5xl xl:text-[6dvw] tracking-wide font-extrabold text-primary-100">
          ATHENIAN BEES
        </div>
        <div className="text-sm text-black-250 italic self-end flex items-center gap-1">
          <div>© 2025 - Crafted with care</div>
          <a target="_blank" href="https://tsm97.github.io/portfolioReact/">
            <SmallDev className="fill-primary-250" />
          </a>
        </div>
      </div>
    </section>
  );
}
