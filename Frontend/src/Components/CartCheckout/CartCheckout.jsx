import {useContext} from "react";
import { ShopContext } from "../../Context/ShopContext";

const CartCheckout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="mt-20 flex flex-col md:flex-row gap-10 lg:gap-20 xl:gap-36">
      <div className="md:w-1/2">
        <h3 className="text-xl font-semibold mb-8">Cart Totals</h3>
        <div className="flex justify-between py-3 border-b-[0.5px] border-solid border-b-slate-500">
          <p className="text-xs md:text-sm text-blackContent">Subtotal</p>
          <p className="text-xs md:text-sm text-blackContent">
            ${getTotalCartAmount()}
          </p>
        </div>
        <div className="flex justify-between py-3 border-b-[0.5px] border-solid border-b-slate-500">
          <p className="text-xs md:text-sm text-blackContent">Shipping Fee</p>
          <p className="text-xs md:text-sm text-blackContent">Free</p>
        </div>
        <div className="flex justify-between pt-3">
          <p className="text-xs md:text-sm text-blackContent font-semibold">
            Total
          </p>
          <p className="text-xs md:text-sm text-blackContent font-semibold">
            ${getTotalCartAmount()}
          </p>
        </div>
        <button className="mt-6 md:mt-10 bg-customRed active:bg-customDarkRed text-xs md:text-sm text-white font-semibold px-4 md:px-6 py-2 md:py-3">
          Proceed to Checkout
        </button>
      </div>
      <div className="">
        <p className="text-xs text-blackContent mb-2">
          If you have a promo code, Enter it here
        </p>
        <form action="">
          <input
            type="text"
            name="promoCode"
            placeholder="promo code"
            className="bg-slate-200 text-blackHeading text-xs font-semibold px-4 py-3 focus:outline-none sm:min-w-[40%]"
          />
          <input
            type="submit"
            value="Submit"
            className="text-xs px-4 sm:px-9 py-3 bg-blackHeading text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default CartCheckout;
