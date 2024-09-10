import "./RelatedProducts.css";
import data_product from "../../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="mt-20">
      <h2 className="text-4xl uppercase text-center w-fit mx-auto font-semibold text-blackContent mb-24 relative relatedProduct_heading">
        Related Products
      </h2>
      <div className="flex gap-x-6 gap-y-16 justify-center flex-wrap">
        {data_product.map((item, i) => {
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

export default RelatedProducts;
