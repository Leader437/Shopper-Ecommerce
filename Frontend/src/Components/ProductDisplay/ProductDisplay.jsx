import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-10">
      <div className="grid gap-1 grid-cols-5 grid-rows-4 sm:w-3/5 sm:mx-auto lg:w-1/2 lg:mx-0 xl:w-[40%]">
        <div>
          <img src={product.image} alt="image of product" />
        </div>
        <div className="col-start-2 col-end-6 row-start-1 row-end-5 bg-red-700 w-full">
          <img src={product.image} alt="image of product" className="w-full" />
        </div>
        <div>
          <img src={product.image} alt="image of product" />
        </div>
        <div>
          <img src={product.image} alt="image of product" />
        </div>
        <div>
          <img src={product.image} alt="image of product" />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-1/2 lg:justify-between">
        <h2 className="text-blackHeading font-semibold text-lg md:text-2xl xl:text-3xl">
          {product.name}
        </h2>
        <div className="flex gap-1 items-center">
          <div>
            <img src={star_icon} alt="Star Icon" />
          </div>
          <div>
            <img src={star_icon} alt="Star Icon" />
          </div>
          <div>
            <img src={star_icon} alt="Star Icon" />
          </div>
          <div>
            <img src={star_icon} alt="Star Icon" />
          </div>
          <div>
            <img src={star_dull_icon} alt="Empty Star Icon" />
          </div>
          <p className="text-xs md:text-sm ml-1">(122)</p>
        </div>
        <div className="flex gap-4">
          <p className="line-through font-extralight text-slate-600 xl:text-lg">
            ${product.old_price}
          </p>
          <p className="text-customRed font-medium xl:text-lg">
            ${product.new_price}
          </p>
        </div>
        <p className="text-sm md:text-base xl:text-lg md:w-4/5 lg:w-full text-justify text-blackContent">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </p>
        <div className="flex gap-5 items-center">
          <h6 className="text-sm md:text-base xl:text-lg font-semibold">
            Select Size:
          </h6>
          <select
            name="size"
            className="outline-none text-sm md:text-base xl:text-lg"
          >
            <option value="sm">S</option>
            <option value="md">M</option>
            <option value="lg">L</option>
            <option value="xl">XL</option>
            <option value="2xl">XXL</option>
          </select>
        </div>
        <button
          className="bg-customRed text-sm md:text-base text-white font-medium px-6 py-2 w-fit"
          onClick={() => addToCart(product.id)}
        >
          Add to Cart
        </button>
        <div>
          <p className="text-xs md:text-sm xl:text-base text-blackContent">
            <span className="font-semibold mr-1">Category:</span>{" "}
            {product.category}
          </p>
          <p className="text-xs md:text-sm xl:text-base text-blackContent">
            <span className="font-semibold mr-1">Tags:</span> Modern, Latest{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
