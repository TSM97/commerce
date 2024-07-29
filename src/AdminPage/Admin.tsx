import { useRef, useState } from "react";
import { db } from "../firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

import Logo from "../assets/ATHBees.webp";
import { lastDocType } from "./types/types";
import uploadImage from "../Utils/uploadImage";
import AdminModal from "./Components/AdminModal";
import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";

export default function Admin() {
  const titleRef = useRef<HTMLInputElement>(null);
  const shortDescRef = useRef<HTMLInputElement>(null);
  const aTagRef = useRef<HTMLInputElement>(null);
  const fullDescRef = useRef<HTMLTextAreaElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    const title = titleRef.current?.value || "";
    const shortDescription = shortDescRef.current?.value || "";
    const fullDescription = fullDescRef.current?.value || "";
    const aTag = aTagRef.current?.value;

    try {
      const docRef = await addDoc(collection(db, "articles"), {
        title,
        shortDescription,
        fullDescription,
        aTag,
        createdAt: Timestamp.now(),
      });
      console.log("Document written with ID: ", docRef.id);

      // Reset form fields
      if (titleRef.current) titleRef.current.value = "";
      if (shortDescRef.current) shortDescRef.current.value = "";
      if (fullDescRef.current) fullDescRef.current.value = "";

      alert("Article uploaded successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error uploading article. Please try again.");
    }
  };

  // uploadImage("dropzone-file");

  return (
    <>
      <section className="container m-auto min-h-screen pt-3">
        <NavHashLink to={"/"}>
          <motion.img
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.5,
              scale: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            src={Logo}
            className="h-[6dvw] cursor-pointer"
            alt="AthenianBees Logo"
          />
        </NavHashLink>

        <div className="text-4xl mb-8 pb-2 text-center border-2 border-t-0 border-r-0 border-l-0 border-b-black border-dashed">
          Article Upload
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
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
            </div>
            <div>
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
            </div>
            <section className="col-span-2">
              <label
                htmlFor="fullDesc"
                className="block mb-2 text-lg font-medium"
              >
                Full Description
              </label>
              <textarea
                ref={fullDescRef}
                id="fullDesc"
                rows={4}
                className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Write your article`s Section"
                required
              />
            </section>
            <div className="col-span-2">
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
            </div>
            {/* TODO: NOT READY YET - Should Implement React-Drop-zone for this element 

          {/* <section className="col-span-2">
            <ImgUpload />
          </section> */}
          </div>
          <div className="flex gap-4 justify-between">
            <button
              type="submit"
              className=" bg-primary hover:bg-primary-500 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
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
        </form>
      </section>
      <AdminModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
