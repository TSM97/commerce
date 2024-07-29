import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

import NavBar from "./Components/NavBar";
import Admin from "./AdminPage/Admin";
import { Hero, Intro } from "./Components/Hero";
import Description from "./Components/News/Description";
import "./App.css";

export default function App() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const isAdminPage = location.pathname === "/admin";

  console.log(isAdminPage);
  return (
    <>
      <section className="flex justify-center w-100dvw">
        {!isAdminPage && <NavBar />}
      </section>
      <Routes>
        <Route
          path="/"
          element={
            <section>
              <Intro />
              <Description />
              <Hero />
              <div className="h-screen"></div>
            </section>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
