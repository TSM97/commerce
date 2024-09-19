import uploadDataToFirestore from "../Utils/uploadDataToFireStore";
import { useDropzone } from "react-dropzone";
import { useRef, useState } from "react";
import UseImageUpload from "../hooks/useImageUpload";

export default function ProductManagementForm() {
  const Quantity = useRef<HTMLInputElement>(null);
  const Description = useRef<HTMLInputElement>(null);
  const Price = useRef<HTMLInputElement>(null);
  const PrevPrice = useRef<HTMLInputElement>(null);
  const Order = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { uploadImage, loading, error } = UseImageUpload();

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setSelectedImage(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
  });

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please select an image.");
      return;
    }
    try {
      const imageUrl = await uploadImage(selectedImage);

      const productData = {
        Quantity: Quantity.current?.value || "",
        Description: Description.current?.value || "",
        Price: parseFloat(Price.current?.value || "0"), // Convert to a number,
        PrevPrice: parseFloat(PrevPrice.current?.value || "0"), // Convert to a number,
        order: parseInt(Order.current?.value || "0"), // Convert to a number,
        imageUrl,
      };

      // Save article data with image URL to Firestore
      await uploadDataToFirestore({
        collectionName: "products",
        imageUrl,
        fields: productData,
      });

      // Reset form fields and image state
      if (Quantity.current) Quantity.current.value = "";
      if (Description.current) Description.current.value = "";
      if (Price.current) Price.current.value = "";
      if (PrevPrice.current) PrevPrice.current.value = "";
      setSelectedImage(null);

      alert("Data uploaded successfully!");
    } catch (uploadError) {
      console.error("Data uploading article: ", uploadError);
      alert("Data uploading data. Please try again.");
    }
  };

  return (
    <>
      {" "}
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col lg:grid gap-6 mb-6 md:grid-cols-3">
          <div className=" col-span-2">
            <label
              htmlFor="Description"
              className="block mb-2 text-lg font-medium text-white-900"
            >
              Description
            </label>
            <input
              ref={Description}
              type="text"
              id="Description"
              className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
              placeholder="Atheenian-Bees - Μέλι από θυμάρι"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Quantity"
              className="block mb-2 text-lg font-medium text-white-900"
            >
              Quantity
            </label>
            <input
              ref={Quantity}
              type="text"
              id="Quantity"
              className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
              placeholder="500GR"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Price"
              className="block mb-2 text-lg font-medium text-white-900"
            >
              Price
            </label>
            <input
              ref={Price}
              type="number"
              min="0"
              step="0.01"
              id="Price"
              className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
              placeholder="8,65"
              required
            />
          </div>
          <div>
            <label
              htmlFor="PrevPrice"
              className="block mb-2 text-lg font-medium text-white-900"
            >
              Price Before Discount
              <span className="text-blue-700"> *Optional</span>
            </label>
            <input
              ref={PrevPrice}
              type="number"
              min="0"
              step="0.01"
              id="PrevPrice"
              className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
              placeholder="10,65"
            />
          </div>
          <div>
            <label
              htmlFor="Order"
              className="block mb-2 text-lg font-medium text-white-900"
            >
              Order
            </label>
            <input
              ref={Order}
              type="number"
              id="Order"
              className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
              placeholder="0"
              required
            />
          </div>
          {/* Img drag n' drop */}
          <section className="w-fit">
            <div className="bg-white-default border border-white-300 text-black-250 text-lg rounded-lg block w-full  p-2.5 white">
              <input {...getInputProps()} />
              {selectedImage ? (
                <div className="flex items-center gap-4">
                  <p>{selectedImage.name}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <p {...getRootProps({ className: "dropzone cursor-pointer" })}>
                  Drag 'n' drop an image here, or click to select one
                </p>
              )}
            </div>
          </section>
        </div>
        <div className="lg:flex gap-4 justify-between">
          <div className="flex gap-3 items-center pb-3">
            <button
              type="submit"
              className=" bg-primary hover:bg-primary-500 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
            {loading && (
              <div
                className="w-6 h-6 rounded-full animate-spin
            border-2 border-dashed border-primary-500 border-t-transparent"
              />
            )}
          </div>

          <button className="hover:bg-primary border-2 border-black-250 hover:text-white font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center">
            Modify Product
          </button>
        </div>
        <div> {error && <p>{error}</p>}</div>
      </form>
    </>
  );
}
