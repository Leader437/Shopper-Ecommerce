import { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item.jsx";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  const URL = import.meta.env.VITE_BACKEND_URL;

  const getPopularProducts = async () => {
    let response = await fetch(`${URL}/popularInWomen`);
    let data = await response.json();

    setPopularProducts(data);
  };

  useEffect(() => {
    getPopularProducts();
  }, []);

  return (
    <div className="mt-32">
      <h2 className="text-4xl uppercase text-center w-fit mx-auto font-semibold text-blackContent mb-24 relative popular_heading">
        Popular in Women
      </h2>
      <div className="container flex gap-x-6 gap-y-16 justify-center flex-wrap">
        {popularProducts.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
