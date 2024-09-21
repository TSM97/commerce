import { RefObject, useCallback } from "react";

type FormFields = {
  [key: string]: RefObject<HTMLInputElement | HTMLTextAreaElement>;
};

export default function useResetFormFields(
  fields: FormFields,
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>,
  setInStock: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Define reset logic and memoize it using useCallback to avoid re-creating the function
  const resetFormFields = useCallback(() => {
    Object.values(fields).forEach((field) => {
      if (field.current) {
        field.current.value = "";
      }
    });

    // Reset selected image and inStock state
    setSelectedImage(null);
    setInStock(true);
  }, [fields, setSelectedImage, setInStock]);

  return { resetFormFields };
}

//? This custom hook is only made to make the ProductManagementForm code smaller and easier to read
