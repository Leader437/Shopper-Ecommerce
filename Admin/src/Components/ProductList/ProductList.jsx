import remove_icon from "../../Assets/cart_cross_icon.png";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [AllProducts, setAllProducts] = useState([]);
  const [Refresh, setRefresh] = useState(false);

  const URL = import.meta.env.VITE_BACKEND_URL;

  const getAllProducts = async () => {
    try {
      const response = await fetch(`${URL}/allProducts`);
      const data = await response.json();
      setAllProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    getAllProducts();
    console.log("Refreshed for all products");
  }, [Refresh]);


  const removeProduct = async (e) => {
    try {
      const response = await fetch(`${URL}/removeProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: e.id, name: e.name }),
      });
      const data = await response.json();

      if (data.success) {
        alert("Product Removed Successfully");
        setRefresh(!Refresh);
      } else {
        throw new Error();
      }
    } catch (err) {
      alert("Error removing product:", err);
    }
  };

  return (
    <div className="bg-white mt-4 md:m-4 p-6 md:p-10 md:w-[80%] lg:w-[70%] h-fit">
      <h2 className="text-blackHeading text-2xl text-center font-semibold mb-8">All Products List</h2>
      <div className="flex gap-2 justify-around pb-3 border-b-[0.5px] border-solid border-b-slate-500">
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%]">
          Products
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[35%] md:w-1/4">
          Title
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%]">
          Old Price
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%]">
          New Price
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%]">
          Category
        </h6>
        <h6 className="text-xs md:text-sm font-semibold text-center w-[15%] hidden md:block">
          Remove
        </h6>
      </div>
      <div className="max-h-[60vh] overflow-y-scroll">
        {AllProducts.map((e) => {
          return (
            <div key={e.id}>
              <div className="relative flex gap-2 justify-around items-center py-3 md:py-5 border-b-[0.5px] border-solid border-b-slate-500">
                <div className="w-[15%]">
                  <img
                    src={e.image}
                    alt="image of chosen product"
                    className="w-10 md:w-12 mx-auto"
                  />
                </div>
                <p className="text-xs md:text-sm text-blackContent w-[35%] md:w-1/4">
                  {e.name}
                </p>
                <p className="text-center text-xs md:text-sm text-blackContent w-[15%]">
                  ${e.old_price}
                </p>
                <p className="text-center text-xs md:text-sm text-blackContent w-[15%]">
                  ${e.new_price}
                </p>
                <p className="text-xs md:text-sm text-blackContent text-center w-[15%]">
                  {e.category}
                </p>
                <div className="w-[15%] absolute md:static top-[5%] left-[90%]">
                  <button
                    onClick={() => removeProduct(e)}
                    className="p-1 block w-4 md:w-6 mx-auto"
                  >
                    <img src={remove_icon} alt="remove icon" className="w-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
