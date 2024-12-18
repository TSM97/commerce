import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useTranslation } from "react-i18next";

import { SPRING_OPTIONS } from "../data";
import Dots from "./Dots";
import CustomButton from "../../CustomButton";
import { useProductsStore } from "../../../stores/useProductsStore";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 7;
const DRAG_BUFFER = 10;

export const DraggableProducts = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const { products } = useProductsStore();
  const { t } = useTranslation();

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

  return (
    <section
      id="Products"
      className="w-full lg:min-w-[50%] h-full flex flex-col items-center justify-center lg:w-1/2 py-[2dvw]  lg:order-1 order-2"
    >
      <div className="w-5/6 md:w-[65%] h-full relative overflow-hidden pb-8">
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
          } h-[90%] w-full items-center`}
        >
          {products.map((product, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  !product?.inStock ? "grayscale-[90%]" : null
                } min-w-[97%] relative lg:h-full mx-[1.5%] bg-white shadow-md rounded-3xl duration-500 hover:shadow-lg`}
              >
                <img
                  draggable="false"
                  className="aspect-square object-cover w-full h-1/2 lg:h-3/4 rounded-t-xl bg-neutral-800 text-honey"
                  src={product?.imageUrl}
                  alt={`${product?.Description} img`}
                />
                <div className="px-4 py-3 full">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product?.Quantity}
                  </span>
                  <p className="text-lg font-bold text-black capitalize">
                    {product?.Description}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      {product?.Price?.toFixed(2)}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto">
                        {product?.PrevPrice?.toFixed(2)}
                      </p>
                    </del>
                    {!product?.inStock ? (
                      <p className="text-red-500">Προιόν Μη Διαθέσιμο</p>
                    ) : null}
                  </div>
                </div>
                <CustomButton
                  elementType="navLink"
                  className="absolute bottom-3 right-3"
                  to={`/#Contact`}
                >
                  {t("Contact")}
                </CustomButton>
              </div>
            );
          })}
        </motion.div>
      </div>
      <Dots
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
        includesOneProduct={includesOneProduct}
      />
    </section>
  );
};
