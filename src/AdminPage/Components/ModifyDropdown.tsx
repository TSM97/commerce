import { useState } from "react";
import { motion } from "framer-motion";

import productType from "../../types/productType";
import DeleteIcon from "../../svgs/DeleteIcon";
import AdminModal from "./AdminModal";

export default function ModifyDropdown({
  products,
  onSelect,
}: {
  products: productType[];
  onSelect: React.Dispatch<React.SetStateAction<productType | null>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProductForDelete, setSelectedProductForDelete] =
    useState<productType | null>(null);
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  const handleSelect = (productId: string) => {
    setIsOpen(false);

    const modProduct = products.find((pr) => pr?.id === productId) || null;
    onSelect(modProduct);
  };
  const handleDeleteClick = (product: productType) => {
    setSelectedProductForDelete(product);
    setIsOpenModal(true); // Open modal only when a product is selected for deletion
  };
  return (
    <>
      <div className="lg:flex lg:flex-col items-end">
        <motion.button
          animate={isOpen ? "open" : "closed"}
          id="dropdownModifyButton"
          onClick={() => setIsOpen((pv) => !pv)}
          className=" bg-primary hover:bg-primary-500 font-medium rounded-lg text-lg h-fit sm:w-auto px-5 py-2.5 mb-2 text-center inline-flex items-center"
          type="button"
        >
          <span className=" mr-3">Modify Products</span>
          <motion.span variants={iconVariants}>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>{" "}
          </motion.span>
        </motion.button>
        <div
          hidden={!isOpen}
          id="dropdownModify"
          className="z-10 border border-honey rounded-lg shadow-xl w-60"
        >
          <ul
            className="h-48 pb-3 overflow-y-auto text-sm text-black"
            aria-labelledby="dropdownModifyProduct"
          >
            {products?.map((product) => {
              return (
                <>
                  <li className="flex items-center justify-between px-1 rounded border border-transparent hover:border-t hover:border-t-transparent hover:border-r-transparent hover:border-l-transparent hover:border-b hover:border-honey hover:bg-primary-100">
                    <div
                      onClick={() => handleSelect(product?.id)}
                      key={product?.id}
                      className=" cursor-pointer  h-fit py-2"
                    >
                      <label
                        htmlFor="checkbox-item-11"
                        className="w-full text-sm font-medium text-black rounded cursor-pointer "
                      >
                        {product?.Description}
                      </label>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onClick={() => {
                        handleDeleteClick(product);
                      }}
                    >
                      <DeleteIcon className=" cursor-pointer  h-fit pr-1" />
                    </motion.div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <AdminModal
        modalType="deleteProduct"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        selectedProductId={selectedProductForDelete?.id}
        imgUrl={selectedProductForDelete?.imageUrl}
      />
    </>
  );
}
