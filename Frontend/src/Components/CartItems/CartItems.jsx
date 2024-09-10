import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, CartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="pt-32">
      <div className="flex gap-2 justify-around pb-3 border-b-[0.5px] border-solid border-b-slate-500">
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%]">
          Products
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[35%] md:w-1/4">
          Title
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%] hidden md:block">
          Price
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%]">
          Quantity
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%]">
          Total
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%] hidden md:block">
          Remove
        </h6>
      </div>
      <div className="max-h-72 overflow-y-scroll">
        {all_product.map((e) => {
          if (CartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="relative flex gap-2 justify-around items-center py-3 border-b-[0.5px] border-solid border-b-slate-500">
                  <div className="w-[15%]">
                    <img
                      src={e.image}
                      alt="image of chosen product"
                      className="w-10 mx-auto"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-blackContent w-[35%] md:w-1/4">
                    {e.name}
                  </p>
                  <p className="text-center text-blackContent w-[15%] hidden md:block">
                    ${e.new_price}
                  </p>
                  <p className="text-center text-blackContent w-[15%] text-xs md:text-sm">
                    {CartItems[e.id]}
                  </p>
                  <p className="text-xs md:text-sm text-blackContent text-center w-[15%]">
                    ${e.new_price * CartItems[e.id]}
                  </p>
                  <div className="w-[15%] absolute md:static top-[5%] left-[90%]">
                    <button
                      onClick={() => removeFromCart(e.id)}
                      className="p-1 block w-4 md:w-6 mx-auto"
                    >
                      <img
                        src={remove_icon}
                        alt="remove icon"
                        className="w-3"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default CartItems;
