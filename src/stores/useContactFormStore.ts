import { create } from "zustand";

type ContactFormStore = {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  setField: (field: string, value: string) => void;
  resetForm: () => void;
};

export const useContactFormStore = create<ContactFormStore>((set) => ({
  formData: {
    name: "",
    email: "",
    message: "",
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
      },
    }),
}));
