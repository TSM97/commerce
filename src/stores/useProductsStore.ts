import { create } from "zustand";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";
import fetchFromFirebase from "../Utils/fetchFromFirebase";

import productType from "../types/productType";

type ProductStore = {
  products: productType[];
  loading: boolean;
  error: null | string;
  fetchProducts: () => Promise<void>;
};

export const useProductsStore = create<ProductStore>((set, get) => ({
  products: [],
  totalPages: 0,
  loading: false,
  error: null,
  fetchProducts: async () => {
    // Check if articles are already fetched, skip fetching if true
    if (get().products.length > 0) return;

    set({ loading: true, error: null });
    const { data, error } = await fetchFromFirebase(
      "products",
      query(collection(db, "products"), orderBy("order", "desc"))
    );

    if (error) {
      set({ error, loading: false });
    } else {
      set({
        products: data,
        loading: false,
        error: null,
      });
    }
  },
}));
