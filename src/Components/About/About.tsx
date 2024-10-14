import bgFlowees from "../../svgs/nFlowees.svg";

export default function About() {
  return (
    <>
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
          <div className="mx-auto w-[90%] md:w-1/2 text-center text-[12dvw] md:text-[6dvw] text-black-250 tracking-tight py-14 leading-none">
            Reveal the Unique Story Behind
            <span className="text-honey tracking-wide"> Atheenian Bees</span>
          </div>
        </section>
        <div className="relative xl:h-[100vh]">
          {" "}
          <div className="relative h-[calc(100vh+80vh)] -top-[100vh]">
            <div className="h-[80vh] sticky top-[calc(100vh-80vh)]">
              <div className="w-full md:w-3/4 min-h-[80vh] text-2xl mx-auto flex xl:flex-row flex-col p-12">
                <div className="flex xl:w-1/2 flex-col justify-between pb-2 order-2 xl:order-1">
                  <p>
                    <div className="text-3xl font-lobster  text-honey tracking-wider pb-4">
                      .Individually
                    </div>
                    <div className="text-xl tracking-normal">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt odio autem inventore ratione doloribus libero
                      veritatis. Ratione laudantium aut deleniti dolores vel
                      maxime illo assumenda, quibusdam animi ea amet minima.
                      Nisi dolore, eius minus maiores provident repellendus
                      sapiente, at veritatis, illo assumenda officiis est vitae
                      quasi culpa! Qui esse modi repudiandae eaque incidunt.
                      Veniam eius asperiores error quibusdam sint. Ipsum. Ullam
                      alias aliquid, nulla ipsum atque ut corporis quos iusto
                      voluptatibus ducimus deleniti maxime vero omnis placeat,
                      cum error, pariatur est sunt consequatur modi corrupti
                      eligendi a dignissimos. Quia, quis.
                    </div>
                  </p>
                  <p>
                    <div className="text-3xl font-lobster text-right text-honey tracking-wider pb-4">
                      .The Story
                    </div>
                    <div className="text-xl tracking-normal">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt odio autem inventore ratione doloribus libero
                      veritatis. Ratione laudantium aut deleniti dolores vel
                      maxime illo assumenda, quibusdam animi ea amet minima.
                      Nisi dolore, eius minus maiores provident repellendus
                      sapiente, at veritatis, illo assumenda officiis est vitae
                      quasi culpa! Qui esse modi repudiandae eaque incidunt.
                      Veniam eius asperiores error quibusdam sint. Ipsum. Ullam
                      alias aliquid, nulla ipsum atque ut corporis quos iusto
                      voluptatibus ducimus deleniti maxime vero omnis placeat,
                      cum error, pariatur est sunt consequatur modi corrupti
                      eligendi a dignissimos. Quia, quis.
                    </div>
                  </p>
                </div>

                <div className="flex justify-end h-1/2 xl:h-[70vh] xl:w-1/2 order-1 xl:order-2">
                  <img
                    src="/src/assets/kox.webp"
                    className="h-full w-full xl:w-[85%] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
