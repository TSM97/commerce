export default function About() {
  return (
    <section>
      <section
        id="About"
        className="bg-svgColor relative h-[100dvh] z-10 flex justify-center items-center"
      >
        <div className="mx-auto w-1/2 text-center text-9xl text-black-250 tracking-tighter py-14">
          Reveal the Unique Story Behind
          <span className="text-honey"> Atheenian Bees</span>
        </div>
      </section>

      <div className="relative h-[calc(100vh+80dvh)] -top-[80vh]">
        <div className="h-[80dvh] sticky top-[calc(100vh-80dvh)]">
          <div className="w-3/4 h-full text-2xl mx-auto grid grid-cols-2p-12">
            <div className="">
              <div> Sticky Foote</div>
            </div>

            <div>
              <img src="/src/assets/kox.webp" className="h-3/4 object-cover" />
            </div>
            <div className="col-span-2">asdas</div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
