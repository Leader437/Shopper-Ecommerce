import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(0);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i <= 300; i++) {
    cart[i] = 0;
  }

  return cart;
};

const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());
  const [all_product, setAll_product] = useState([]);

  const URL = import.meta.env.VITE_BACKEND_URL;

  const getProducts = async () => {
    let response = await fetch(`${URL}/allProducts`);
    let data = await response.json();
    setAll_product(data);
  };

  const getCartData = async () => {
    if (localStorage.getItem("auth-token")) {
      let response = await fetch(`${URL}/getCartData`, {
        method: "POST",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: ""
      });

      let data = await response.json();
      setCartItems(data);
    }
  }

  useEffect(() => {
    getProducts();
    getCartData();
  }, []);

  const addToCart = async (itemId) => {
    if (localStorage.getItem("auth-token")) {
      let response = await fetch(`${URL}/saveCartData`, {
        method: "POST",
        headers: {
          Accepts: "application/form-data",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ ItemId: itemId }),
      });

      let result = await response.json();
      if (result.success) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        alert("Item Added to Cart Successfully");
      } else {
        alert(result.error);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    if (localStorage.getItem("auth-token")) {
      let response = await fetch(`${URL}/removeFromCart`, {
        method: "POST",
        headers: {
          Accepts: "application/form-data",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ ItemId: itemId }),
      });

      let result = await response.json();
      if (result.success) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        alert("Item removed From Cart Successfully");
      } else {
        alert(result.error);
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        let product = all_product.find((i) => i.id === Number(item));
        totalAmount += product.new_price * CartItems[item];
      }
    }

    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;

    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        totalItem += CartItems[item];
      }
    }

    return totalItem;
  };

  const contextValue = {
    all_product,
    CartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
