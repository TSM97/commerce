import NavBar from "./Components/NavBar";
import HeroSection from "./Components/Hero";
import "./App.css";

export default function App() {
  return (
    <>
      <section className="flex justify-center w-100dvw">
        <NavBar />
      </section>
      <HeroSection />
    </>
  );
}
