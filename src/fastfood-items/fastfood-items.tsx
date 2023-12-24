import { FastFoodItemsProps } from "./fastfood-items.types";
import { HiShoppingCart } from "react-icons/hi2";

export const FastFoodItems: React.FC<FastFoodItemsProps> = ({
  name,
  imageUrl,

  ingredients,
  price,
  delay,
}) => {
  return (
    <div
      className="card shadow-sm relative pb-6 bg-white rounded-t-md overflow-hidden flex flex-col fade-in-horiz"
      style={{ animationDelay: delay + "s", opacity: 0 }}
    >
      <span className=" text-base px-2 font-semibold bg-green-400 absolute right-1 top-3 text-white">
        قیمت: {price.toLocaleString()} تومان
      </span>
      <img src={imageUrl} className="mb-2" alt="" height={90} />
      <div className="card-body pt-2 px-4 text-center pb-3 ">
        <h1 className=" mb-2 text-lg font-bold text-gray-600">{name}</h1>
        <p className="description text-gray-500 text-sm font-semibold">
          {ingredients}
        </p>
      </div>

      <div className="card-footer mt-auto px-4">
        <button className="text-green-400 p-1 flex justify-center items-center gap-2  font-semibold w-full border-green-400 border self-end mt-auto hover:bg-green-400 hover:text-white transition-all">
          <HiShoppingCart />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};
