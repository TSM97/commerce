import { create } from "zustand";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";
import fetchFromFirebase from "../Utils/fetchFromFirebase";

import ArticleType from "../types/articleType";

type ArticlesStore = {
  articles: ArticleType[];
  loading: boolean;
  error: null | string;
  fetchArticles: () => Promise<void>;
};

export const useArticlesStore = create<ArticlesStore>((set, get) => ({
  articles: [],
  loading: false,
  error: null,
  fetchArticles: async () => {
    // Check if articles are already fetched, skip fetching if true
    if (get().articles.length > 0) return;

    set({ loading: true, error: null });
    const { data, error } = await fetchFromFirebase(
      "articles",
      query(collection(db, "articles"), orderBy("createdAt", "desc"))
    );

    if (error) {
      set({ error, loading: false });
    } else {
      set({
        articles: data,
        loading: false,
        error: null,
      });
    }
  },
}));
