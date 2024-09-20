import { RefObject } from "react";

const resetFormFields = (
  fields: {
    [key: string]: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  },
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>
) => {
  Object.values(fields).forEach((field) => {
    if (field.current) {
      field.current.value = "";
    }
  });

  if (setSelectedImage) {
    setSelectedImage(null);
  }
};

export default resetFormFields;
