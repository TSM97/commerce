import { create } from 'zustand';

type ArticleFormStore = {
  title: string;
  shortDesc: string;
  fullDesc: string;
  titleEL: string;
  shortDescEL: string;
  fullDescEL: string;
  aTag: string;
  selectedImage: File | null;
  showGreekForm: boolean;
  isFullDescRequired: boolean;
  setField: (field: string, value: any) => void;
  resetForm: () => void;
};

export const useArticlesFormStore = create<ArticleFormStore>((set) => ({
  title: '',
  shortDesc: '',
  fullDesc: '',
  titleEL: '',
  shortDescEL: '',
  fullDescEL: '',
  aTag: '',
  selectedImage: null,
  showGreekForm: false,
  isFullDescRequired: true,
  setField: (field, value) => set({ [field]: value }),
  resetForm: () =>
    set({
      title: '',
      shortDesc: '',
      fullDesc: '',
      titleEL: '',
      shortDescEL: '',
      fullDescEL: '',
      aTag: '',
      selectedImage: null,
      showGreekForm: false,
      isFullDescRequired: true,
    }),
}));
