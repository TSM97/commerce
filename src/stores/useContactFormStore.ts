import { create } from "zustand";

type ContactFormStore = {
  formData: {
    name: string;
    email: string;
    message: string;
    isPurchase: boolean;
  };
  setField: (field: string, value: string | boolean) => void;
  resetForm: () => void;
};

export const useContactFormStore = create<ContactFormStore>((set) => ({
  formData: {
    name: "",
    email: "",
    message: "",
    isPurchase: true,
  },
  setField: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),
  resetForm: () =>
    set({
      formData: {
        name: "",
        email: "",
        message: "",
        isPurchase: true,
      },
    }),
}));
