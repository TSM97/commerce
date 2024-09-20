import { RefObject } from "react";

const resetFormFields = (
  fields: {
    [key: string]: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  },
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>,
  setInStock: React.Dispatch<React.SetStateAction<boolean>>
) => {
  Object.values(fields).forEach((field) => {
    if (field.current) {
      field.current.value = "";
    }
  });

  if (setSelectedImage) {
    setSelectedImage(null);
  }
  if (setInStock) {
    setInStock(true);
  }
};

export default resetFormFields;
