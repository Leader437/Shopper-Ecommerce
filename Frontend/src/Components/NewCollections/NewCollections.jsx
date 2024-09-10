import { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Item/Item.jsx";


const NewCollections = () => {
  const [new_collections, setNew_collections] = useState([]);

  const URL = import.meta.env.VITE_BACKEND_URL;

  const getNewCollection = async () => {
    let response = await fetch(`${URL}/newCollection`);
    let data = await response.json();

    setNew_collections(data);
  }

  useEffect(() => {
    getNewCollection();
  }, []);
  

  return (
    <div className="mt-32">
      <h2 className="text-4xl uppercase text-center w-fit mx-auto font-semibold text-blackContent mb-24 relative collection_heading">
        New Collections
      </h2>
      <div className="container flex gap-x-6 gap-y-16 justify-center flex-wrap">
        {new_collections.map((item, i) => {
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

export default NewCollections;
