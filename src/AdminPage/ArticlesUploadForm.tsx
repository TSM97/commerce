import { Timestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { useRef, useState } from "react";

import uploadDataToFirestore from "../Utils/uploadDataToFireStore";
import useImageUpload from "../hooks/useImageUpload";
import AdminModal from "./Components/AdminModal";
import useResetFormFields from "./hooks/useResetFormFields";

export default function ArticlesUploadForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const shortDescRef = useRef<HTMLInputElement>(null);
  const aTagRef = useRef<HTMLInputElement>(null);
  const fullDescRef = useRef<HTMLTextAreaElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isFullDescRequired, setIsFullDescRequired] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [greekFormShow, setGreekFormShow] = useState(false);
  const { uploadImage, loading, error } = useImageUpload();
  const { resetFormFields } = useResetFormFields(
    { titleRef, shortDescRef, fullDescRef, aTagRef },
    setSelectedImage
  );

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setSelectedImage(acceptedFiles[0]);
      setIsFullDescRequired(false);
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

      const articleData = {
        en: {
          title: titleRef.current?.value || "",
          shortDescription: shortDescRef.current?.value || "",
          fullDescription: fullDescRef.current?.value || "",
        },
        aTag: aTagRef.current?.value || "",
        imageUrl,
        createdAt: Timestamp.now(),
      };

      // Save article data with image URL to Firestore
      await uploadDataToFirestore({
        collectionName: "articles",
        imageUrl,
        fields: articleData,
      });

      // Reset form fields and image state
      resetFormFields();
      setSelectedImage(null);
      alert("Data uploaded successfully!");
      window.location.reload();
    } catch (uploadError) {
      console.error("Data uploading article: ", uploadError);
      alert("Data uploading data. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col lg:grid gap-6 mb-6 md:grid-cols-2">
          <>
            <motion.div>
              <label
                htmlFor="Title"
                className="block mb-2 text-lg font-medium text-white-900"
              >
                Title
              </label>
              <input
                ref={titleRef}
                type="text"
                id="Title"
                className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
                placeholder="John"
                required
              />
            </motion.div>
            <motion.div>
              <label
                htmlFor="shortDesc"
                className="block mb-2 text-lg font-medium text-white-900"
              >
                Short Description
              </label>
              <input
                ref={shortDescRef}
                type="text"
                id="shortDesc"
                className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
                placeholder="Doe"
                required
              />
            </motion.div>
            <motion.section className="col-span-2">
              <div className="lg:flex gap-4">
                <label
                  htmlFor="fullDesc"
                  className="block mb-2 text-lg font-medium"
                >
                  Full Description
                </label>
                <div className="text-blue-700">
                  In order to change Paragraph Write
                  <span className="font-bold text-xl">" || "</span>
                </div>
              </div>
              <textarea
                ref={fullDescRef}
                id="fullDesc"
                rows={4}
                className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 min-h-14"
                placeholder="Write your article`s Section"
                required={isFullDescRequired}
              />
            </motion.section>
            <motion.div className="col-span-2">
              <label
                htmlFor="aTag"
                className="block mb-2 text-lg font-medium text-white-900"
              >
                The Url that you want to Link instead of writing your article*
              </label>
              <input
                ref={aTagRef}
                type="text"
                id="aTag"
                className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
                placeholder="https://theuselessweb.com/"
              />
            </motion.div>
          </>
          {/* Img drag n' drop */}
          <section className="w-fit">
            <div className="bg-white-default border border-white-300 text-black-250 text-lg rounded-lg block w-full  p-2.5 white">
              <input {...getInputProps()} />
              {selectedImage ? (
                <div className="flex items-center gap-4">
                  <p>{selectedImage.name}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImage(null);
                      setIsFullDescRequired(true);
                    }}
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

          <button
            onClick={() => setIsOpen(true)}
            data-modal-target="AdminModal"
            data-modal-toggle="AdminModal"
            type="button"
            className="border-black border-2 hover:bg-red-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Delete the last article that you Uploaded
          </button>
        </div>
        <div> {error && <p>{error}</p>}</div>
        <div className="text-red-500">
          * In case of URL dont write a full Description
        </div>
      </form>
      <AdminModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
