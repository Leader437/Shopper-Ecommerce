import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="container relative">
      <div className="pt-16">
        <img src={props.banner} alt="respective page top banner" />
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="text-xs md:text-sm">
          <span className="font-semibold mr-1">Showing 1 - 12</span> out of 54
          Products
        </div>
        <button className="flex items-center gap-2 border-[0.5px] border-solid border-blackContent px-3 py-2 rounded-full">
          <span className="text-xs md:text-sm text-blackContent whitespace-nowrap">
            Sort by
          </span>{" "}
          <img src={dropdown_icon} alt="dropdown Icon logo" />
        </button>
      </div>
      <div className="mt-10 flex gap-x-6 gap-y-16 justify-center flex-wrap">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                img={item.image}
                name={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <button className="mt-12 sm:mt-16 block md:mt-24 mx-auto bg-slate-100 text-xs md:text-sm font-semibold text-gray-700 py-4 px-8 rounded-full">Explore More</button>
    </div>
  );
};

export default ShopCategory;