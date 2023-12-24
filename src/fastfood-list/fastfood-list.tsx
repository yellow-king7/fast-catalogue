import { FastFoodItems } from "../fastfood-items/fastfood-items";
import { FastFoodListProps } from "./fastfood-list.types";

export const FastFoodList: React.FC<FastFoodListProps> = ({ fastfoods }) => {
  let delay = 0.1;
  return (
    <div className="grid grid-cols-3 gap-7">
      {fastfoods?.map((fastfood) => {
        delay += 0.05;
        return <FastFoodItems key={fastfood.id} delay={delay} {...fastfood} />;
      })}
    </div>
  );
};
