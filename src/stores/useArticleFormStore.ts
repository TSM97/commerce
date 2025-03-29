import { create } from "zustand";

type ArticleFormStore = {
  title: string;
  shortDesc: string;
  fullDesc: { html: string; plainText: string };
  titleEL: string;
  shortDescEL: string;
  fullDescEL: { html: string; plainText: string };
  contactButtonEL: string;
  contactButton: string;
  hasContactButton: boolean;
  aTag: string;
  selectedImage: File | null;
  showGreekForm: boolean;
  articleType: string[];
  isFullDescRequired: boolean;
  setField: (field: string, value: any) => void;
  resetForm: () => void;
};

export const useArticlesFormStore = create<ArticleFormStore>((set) => ({
  title: "",
  shortDesc: "",
  fullDesc: { html: "", plainText: "" },
  titleEL: "",
  shortDescEL: "",
  contactButtonEL: "",
  contactButton: "",
  hasContactButton: false,
  fullDescEL: { html: "", plainText: "" },
  aTag: "",
  selectedImage: null,
  showGreekForm: false,
  articleType: [],
  isFullDescRequired: true,
  setField: (field, value) => set({ [field]: value }),
  resetForm: () =>
    set({
      title: "",
      shortDesc: "",
      fullDesc: { html: "", plainText: "" },
      titleEL: "",
      shortDescEL: "",
      fullDescEL: { html: "", plainText: "" },
      aTag: "",
      selectedImage: null,
      showGreekForm: false,
      articleType: [],
      isFullDescRequired: true,
    }),
}));
