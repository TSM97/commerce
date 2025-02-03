import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useTranslation } from "react-i18next";

import { SPRING_OPTIONS } from "../data";
import productType from "../../../types/productType";
import Dots from "./Dots";
import CustomButton from "../../Common/CustomButton";
import { useProductsStore } from "../../../stores/useProductsStore";
import { useContactFormStore } from "../../../stores/useContactFormStore";
import isNullOrWhitespace from "../../../Utils/isNullOrWhitespace";
import Arrow from "../../../svgs/Arrow";
import useScreenSize from "../../../hooks/useScreenSize";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 7;
const DRAG_BUFFER = 10;

export const DraggableProducts = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const { products } = useProductsStore();
  const { t, i18n } = useTranslation();
  const inStockProducts = products.filter((pr) => pr.inStock);
  const outOfStockProducts = products.filter((pr) => !pr.inStock);
  const finalProductsArray = [...inStockProducts, ...outOfStockProducts];
  const { formData, setField } = useContactFormStore();
  const { isMobile } = useScreenSize();

  const includesOneProduct = products.length === 1;

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === products.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, imgIndex, products.length]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < products.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  function handleClick(prd: productType) {
    if (prd?.inStock) {
      const msg = `${
        isNullOrWhitespace(formData?.message) ? "" : formData?.message + "\r\n"
      }(X) - ${i18n.language === "en" ? prd?.Description : prd.DescriptionEL}`;

      setField("message", msg);
    } else {
      const msg = `${
        isNullOrWhitespace(formData?.message) ? "" : formData?.message + "\r\n"
      }(${i18n.language === "en" ? prd?.Description : prd.DescriptionEL}) - ${t(
        "contactForm_out_of_stock"
      )}`;

      setField("message", msg);
    }
  }

  function handleArrowClick(action: "inc" | "decr") {
    if (action === "inc") {
      setImgIndex((pv) => {
        if (pv === products.length - 1) {
          return 0;
        }
        return pv + 1;
      });
    } else if (action === "decr") {
      setImgIndex((pv) => {
        if (pv === 0) {
          return products?.length - 1;
        }
        return pv - 1;
      });
    }
  }
  return (
    <section
      id="Products"
      className="w-full lg:min-w-[50%] h-full flex flex-col items-center justify-center lg:w-1/2 py-[2dvw]  lg:order-1 order-2"
    >
      <section className="flex items-center h-full justify-center gap-10">
        {!isMobile && (
          <motion.div
            onClick={() => handleArrowClick("decr")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            <Arrow className="w-[50px] h-[50px] fill-primary-250 cursor-pointer" />
          </motion.div>
        )}
        <div className="w-5/6 md:w-[65%] h-full relative overflow-hidden pb-8 flex">
          <motion.div
            drag={includesOneProduct ? false : "x"}
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `-${imgIndex * 100}%`,
            }}
            draggable={!includesOneProduct}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className={`flex ${
              !includesOneProduct && "cursor-grab active:cursor-grabbing"
            } h-[90%] w-full items-stretch`}
          >
            {finalProductsArray.map((product, idx) => {
              return (
                <div
                  key={idx}
                  className="min-w-[97%] relative h-full mx-[1.5%] bg-white shadow-md rounded-3xl duration-500 hover:shadow-lg"
                >
                  <div
                    className={`${
                      !product?.inStock ? "grayscale-[90%]" : null
                    }`}
                  >
                    <img
                      draggable="false"
                      className="aspect-square object-cover w-full h-2/3 lg:h-3/4 rounded-t-xl bg-neutral-800 text-honey"
                      src={product?.imageUrl}
                      alt={`${product?.Description} img`}
                    />
                  </div>

                  <div className="px-2 md:px-4 py-3 h-1/3 bg-white-default rounded-3xl overflow-hidden">
                    <div className="text-gray-400 mr-3 uppercase text-xs flex justify-between">
                      <div>{product?.Quantity}</div>
                      {!product?.inStock ? (
                        <div className="text-red-500">
                          {t("product_out_of_stock")}
                        </div>
                      ) : null}
                    </div>
                    <p className="text-lg font-bold text-black capitalize">
                      {i18n.language === "en"
                        ? product?.Description
                        : product?.DescriptionEL}
                    </p>
                    <div className="sm:flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                          {product?.Price?.toFixed(2)} €
                        </p>
                        <del>
                          <p className="text-sm text-gray-600 cursor-auto">
                            {product?.PrevPrice?.toFixed(2)}
                          </p>
                        </del>
                      </div>
                    </div>
                  </div>
                  <CustomButton
                    elementType="navLink"
                    className="absolute bottom-3 right-3 bg-white-default"
                    to={`/#Contact`}
                    onClick={() => handleClick(product)}
                  >
                    {t("Contact")}
                  </CustomButton>
                </div>
              );
            })}
          </motion.div>
        </div>
        {!isMobile && (
          <motion.div
            onClick={() => handleArrowClick("inc")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            <Arrow className="w-[50px] h-[50px] rotate-180 fill-primary-250  cursor-pointer" />
          </motion.div>
        )}
      </section>
      <Dots
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
        includesOneProduct={includesOneProduct}
      />
    </section>
  );
};
