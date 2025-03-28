import { Timestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import uploadDataToFirestore from "../Utils/uploadDataToFireStore";
import { useArticlesFormStore } from "../stores/useArticleFormStore";
import isNullOrWhitespace from "../Utils/isNullOrWhitespace";
import useImageUpload from "../hooks/useImageUpload";
import AdminModal from "./Components/AdminModal";
import Checkbox from "../Components/Common/CheckBox/CheckBox";

export default function ArticlesUploadForm() {
  const {
    title,
    shortDesc,
    fullDesc,
    titleEL,
    shortDescEL,
    fullDescEL,
    contactButton,
    contactButtonEL,
    aTag,
    selectedImage,
    showGreekForm,
    hasContactButton,
    isFullDescRequired,
    setField,
    resetForm,
  } = useArticlesFormStore();
  const [isOpen, setIsOpen] = useState(false);
  const { uploadImage, loading, error } = useImageUpload();

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setField("selectedImage", acceptedFiles[0]);
      setField("isFullDescRequired", false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
  });

  const handleCheck = () => {
    setField("showGreekForm", !showGreekForm);
  };

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
          title,
          shortDescription: shortDesc,
          fullDescription: fullDesc,
          contactButtonTitle: contactButton,
        },
        ...(titleEL || shortDescEL || fullDescEL
          ? {
              el: {
                title: titleEL,
                shortDescription: shortDescEL,
                fullDescription: fullDescEL,
                contactButtonTitle: contactButtonEL,
              },
            }
          : {}),
        aTag,
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
      resetForm();
      setField("selectedImage", null);
      alert("Data uploaded successfully!");
      window.location.reload();
    } catch (uploadError) {
      console.error("Data uploading article: ", uploadError);
      alert("Data uploading data. Please try again.");
    }
  };

  return (
    <>
      <div className="mb-4">
        <Checkbox
          isChecked={showGreekForm}
          handleCheck={handleCheck}
          label="Πατώντας εδώ έχεις την δυνατότητα να συμπληρώσεις την φόρμα στα Ελληνικά ώστε να λειτουργεί η μετάφραση"
        />
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col lg:grid gap-6 mb-6 md:grid-cols-2">
          {!showGreekForm ? (
            <>
              <motion.div>
                <label
                  htmlFor="Title"
                  className="block mb-2 text-lg font-medium text-white-900"
                >
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setField("title", e.target.value)}
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
                  value={shortDesc}
                  onChange={(e) => setField("shortDesc", e.target.value)}
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
                </div>
                <ReactQuill
                  theme="snow"
                  value={fullDesc.html}
                  className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 min-h-14"
                  onChange={(value, _, source, editor) => {
                    if (source === "user") {
                      setField("fullDesc", {
                        html: value,
                        plainText: editor.getText().trim(),
                      });
                    }
                  }}
                  placeholder="Write your article`s Section"
                  id="fullDesc"
                />
              </motion.section>
            </>
          ) : (
            <>
              <motion.div>
                <label
                  htmlFor="TitleEL"
                  className="block mb-2 text-lg font-medium text-white-900"
                >
                  Title (Ελληνική μετάφραση)
                </label>
                <input
                  value={titleEL}
                  onChange={(e) => setField("titleEL", e.target.value)}
                  type="text"
                  id="TitleEL"
                  className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
                  placeholder="Γιαννος"
                />
              </motion.div>
              <motion.div>
                <label
                  htmlFor="shortDescEL"
                  className="block mb-2 text-lg font-medium text-white-900"
                >
                  Short Description (Ελληνική μετάφραση)
                </label>
                <input
                  value={shortDescEL}
                  onChange={(e) => setField("shortDescEL", e.target.value)}
                  type="text"
                  id="shortDescEL"
                  className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
                  placeholder="Doe"
                />
              </motion.div>
              <motion.section className="col-span-2">
                <div className="lg:flex gap-4">
                  <label
                    htmlFor="fullDescEL"
                    className="block mb-2 text-lg font-medium"
                  >
                    Full Description (Ελληνική μετάφραση)
                  </label>
                </div>
                <ReactQuill
                  theme="snow"
                  value={fullDescEL.html}
                  className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 min-h-14"
                  onChange={(value, _, source, editor) => {
                    if (source === "user") {
                      setField("fullDescEL", {
                        html: value,
                        plainText: editor.getText().trim(),
                      });
                    }
                  }}
                  placeholder="Γράψτε την ενότητα του άρθρου σας"
                  id="fullDescEL"
                />
              </motion.section>
            </>
          )}
          {/* ENABLE CONTACT BUTTON */}

          <motion.div className="col-span-2">
            <Checkbox
              isChecked={hasContactButton}
              handleCheck={() => {
                setField("hasContactButton", !hasContactButton);
              }}
              label='Apply "Contact Button" in your article'
            />
          </motion.div>

          {hasContactButton && (
            <div className="md:flex gap-4">
              <motion.div>
                <label
                  htmlFor="TitleEL"
                  className="block mb-2 text-lg font-medium text-white-900"
                >
                  Contact Button
                </label>

                <input
                  value={contactButton}
                  onChange={(e) => setField("contactButton", e.target.value)}
                  type="text"
                  id="contactButton"
                  className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
                  placeholder="Contact"
                />
              </motion.div>

              <motion.div>
                <label
                  htmlFor="TitleEL"
                  className="block mb-2 text-lg font-medium text-white-900"
                >
                  Contact Button (Ελληνική μετάφραση)
                </label>

                <input
                  value={contactButtonEL}
                  onChange={(e) => setField("contactButtonEL", e.target.value)}
                  type="text"
                  id="contactButtonEL"
                  className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
                  placeholder="Επικοινωνία"
                />
              </motion.div>
            </div>
          )}
          <motion.div className="col-span-2">
            <label
              htmlFor="aTag"
              className="block mb-2 text-lg font-medium text-white-900"
            >
              The Url that you want to Link instead of writing your article*
            </label>
            <input
              onChange={(e) => setField("aTag", e.target.value)}
              type="text"
              id="aTag"
              className="bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white"
              placeholder="https://theuselessweb.com/"
            />
          </motion.div>
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
                      setField("selectedImage", null);
                      setField("isFullDescRequired", true);
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
              disabled={
                isNullOrWhitespace(title) ||
                isNullOrWhitespace(shortDesc) ||
                (isNullOrWhitespace(fullDesc.plainText) && !isFullDescRequired)
              }
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
