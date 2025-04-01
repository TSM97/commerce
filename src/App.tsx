import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
// import Lenis from 'lenis';

import NavBar from "./Components/NavBar";
import Admin from "./AdminPage/Admin";
import { Footer } from "./Components/Footer";
import { Hero, Intro } from "./Components/Hero";
import News from "./Components/News/News";
import { ArticlePage } from "./Components/ArticlePage";
import Products from "./Components/Products";
import About from "./Components/About";
import { useArticlesStore } from "./stores/useArticlesStore";
import { useProductsStore } from "./stores/useProductsStore";
import Contact from "./Components/Contact";
import ProtectedRoute from "./Auth/ProtectedRoute";
import AuthRedirect from "./Auth/AuthRedirect";
import { NotFound } from "./Components/NotFound";
import i18n from "./Utils/i18n";

export default function App() {
  //! If I upload an article data to the article's Section dont refresh. Is it actually a problem at our case?
  const { fetchArticles } = useArticlesStore();
  const { fetchProducts } = useProductsStore();

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, []);

  useEffect(() => {
    fetchArticles(); // Fetch articles on component mount
    fetchProducts();
  }, [fetchArticles, fetchProducts]);

  return (
    <section id="main">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Intro />
              <Products />
              <Hero />
              <News />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/auth" element={<AuthRedirect />} />
        <Route
          path="/article/:id"
          element={
            <>
              <NavBar />
              <ArticlePage />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
