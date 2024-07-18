import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "./Components/Intro";
import Description from "./Components/Description";
import Hero from "./Components/Hero";

export default function HeroSection() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Intro />
      <Description />
      <Hero />
      <div className="h-screen"></div>
    </main>
  );
}
