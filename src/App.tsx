import NavBar from "./Components/NavBar";
import { Hero, Intro } from "./Components/Hero";
import Description from "./Components/News/Description";
import "./App.css";

import { useEffect } from "react";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <section className="flex justify-center w-100dvw">
        <NavBar />
      </section>
      <Intro />
      <Description />
      <Hero />
      <div className="h-screen"></div>
    </>
  );
}
