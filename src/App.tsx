import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import Lenis from 'lenis';

import NavBar from "./Components/NavBar";
import Admin from "./AdminPage/Admin";
import { Hero, Intro } from "./Components/Hero";
import News from "./Components/News/News";
import { ArticlePage } from "./Components/ArticlePage";
import Products from "./Components/Products";
import About from "./Components/About";

import "./App.css";
import { useArticlesStore } from "./stores/useArticlesStore";
import { useProductsStore } from "./stores/useProductsStore";

export default function App() {
  const location = useLocation(); // Get the current location

  //! If I upload an article data to the article's Section dont refresh. Is it actually a problem at our case?
  const { fetchArticles } = useArticlesStore();
  const { fetchProducts, products } = useProductsStore();

  useEffect(() => {
    fetchArticles(); // Fetch articles on component mount
    fetchProducts();
  }, [fetchArticles, fetchProducts]);

  console.log(products);

  const isAdminPage = location.pathname === "/admin";

  return (
    <section id="main">
      <section className="flex justify-center w-100dvw">
        {!isAdminPage && <NavBar />}
      </section>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Products />
              <Hero />
              <News />
              <About />
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </section>
  );
}
