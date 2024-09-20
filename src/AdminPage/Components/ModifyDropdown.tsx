import { useState } from "react";

import productType from "../../types/productType";

export default function ModifyDropdown({
  products,
  onSelect,
}: {
  products: productType[];
  onSelect: React.Dispatch<React.SetStateAction<productType | null>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (productId: string) => {
    setIsOpen(false);

    const modProduct = products.find((pr) => pr?.id === productId) || null;
    console.log(productId);
    onSelect(modProduct);
  };
  return (
    <div className="flex flex-col items-end">
      <button
        id="dropdownModifyButton"
        onClick={() => setIsOpen(!isOpen)}
        className=" bg-primary hover:bg-primary-500 font-medium rounded-lg text-lg h-fit sm:w-auto px-5 py-2.5 mb-2 text-center inline-flex items-center"
        type="button"
      >
        Modify Products
        <svg
          className="w-2.5 h-2.5 ms-3"
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
        </svg>
      </button>
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
              <li onClick={() => handleSelect(product?.id)} key={product?.id}>
                <div className="flex items-center rounded border border-transparent hover:border-t hover:border-t-transparent hover:border-r-transparent hover:border-l-transparent hover:border-b hover:border-honey hover:bg-primary-100">
                  <label
                    htmlFor="checkbox-item-11"
                    className="w-full py-2 ms-2 text-sm font-medium text-black rounded"
                  >
                    {product?.Description}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
