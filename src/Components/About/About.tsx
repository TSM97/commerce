import bgFlowees from "../../svgs/nFlowees.svg";

export default function About() {
  return (
    <section>
      <section
        style={{
          backgroundImage: `url(${bgFlowees})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        id="About"
        className="bg-svgColor relative h-[100vh] z-10 flex justify-center items-center"
      >
        <div className="mx-auto md:w-1/2 text-center text-[12dvw] md:text-[6dvw] text-black-250 tracking-tighter py-14 leading-none">
          Reveal the Unique Story Behind
          <span className="text-honey"> Atheenian Bees</span>
        </div>
      </section>

      <div className="relative h-[calc(100vh+80vh)] -top-[90vh]">
        <div className="h-[80vh] sticky top-[calc(100vh-80vh)]">
          <div className="w-full md:w-3/4 h-full text-2xl mx-auto grid grid-cols-2 p-12">
            <div className="">
              <div> Sticky Foote</div>
            </div>

            <div>
              <img
                src="/src/assets/kox.webp"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2">asdas</div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
