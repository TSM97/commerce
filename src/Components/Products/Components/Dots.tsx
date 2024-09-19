import { useProductsStore } from "../../../stores/useProductsStore";

const Dots = ({
  imgIndex,
  setImgIndex,
  includesOneProduct,
}: {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
  includesOneProduct: boolean;
}) => {
  const { products } = useProductsStore();
  return (
    !includesOneProduct && (
      <div className="mt-4 flex w-full justify-center gap-2">
        {products.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === imgIndex ? "bg-primary-750" : "bg-neutral-400"
              }`}
            />
          );
        })}
      </div>
    )
  );
};

export default Dots;
