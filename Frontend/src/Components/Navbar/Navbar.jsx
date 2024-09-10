import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import menu_icon from "../../Assets/menu_icon.svg";
import x_icon from "../../Assets/x_mark_icon.svg";
import "./Navbar.css";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [activeNav, setactiveNav] = useState("");
  const [hamBurger, sethamBurger] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    // Update activeNav based on the current path
    const path = location.pathname;
    if (path === "/") {
      setactiveNav("shop");
    } else if (path === "/men") {
      setactiveNav("men");
    } else if (path === "/women") {
      setactiveNav("women");
    } else if (path === "/kids") {
      setactiveNav("kids");
    } else if (path === "/login") {
      setactiveNav("");
    } else if (path === "/cart") {
      setactiveNav("");
    }
  }, [location]);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container py-2 flex justify-between relative">
        <div className="w-fit flex items-center gap-2">
          <img src={logo} alt="Shopping Bag Logo" className="w-10" />
          <h2 className="uppercase font-medium text-2xl">Shopper</h2>
        </div>
        <ul
          className={`bg-white flex gap-6 flex-col md:flex-row items-center ${
            hamBurger ? "nav-open" : "nav-close"
          }`}
        >
          <li
            className={`relative ${activeNav === "shop" ? "nav-active" : ""}`}
          >
            <Link
              to="/"
              className="font-medium"
              onClick={() => {
                sethamBurger(false);
              }}
            >
              Shop
            </Link>
          </li>
          <li className={`relative ${activeNav === "men" ? "nav-active" : ""}`}>
            <Link
              to="/men"
              className="font-medium"
              onClick={() => {
                sethamBurger(false);
              }}
            >
              Men
            </Link>
          </li>
          <li
            className={`relative ${activeNav === "women" ? "nav-active" : ""}`}
          >
            <Link
              to="/women"
              className="font-medium"
              onClick={() => {
                sethamBurger(false);
              }}
            >
              Women
            </Link>
          </li>
          <li
            className={`relative ${activeNav === "kids" ? "nav-active" : ""}`}
          >
            <Link
              to="/kids"
              className="font-medium"
              onClick={() => {
                sethamBurger(false);
              }}
            >
              Kids
            </Link>
          </li>
          <li>
            {localStorage.getItem("auth-token") ? (
              <button
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
                className="border-[1px] border-solid border-black rounded-3xl text-sm px-8 py-2 block md:hidden"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block md:hidden"
                onClick={() => {
                  sethamBurger(false);
                }}
              >
                <button className="border-[1px] border-solid border-black rounded-3xl text-sm px-8 py-2">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
        <div className="flex items-center gap-4 md:gap-6">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="border-[1px] border-solid border-black rounded-3xl text-sm px-8 py-2 hidden md:block"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hidden md:block">
              <button className="border-[1px] border-solid border-black rounded-3xl text-sm px-8 py-2">
                Login
              </button>
            </Link>
          )}
          <Link to="/cart">
            <button className="w-6 relative top-1">
              <img src={cart_icon} alt="Cart Icon" />
              <div className="cart-count bg-customRed text-white absolute left-3/4 top-0 rounded-full w-3 h-3 text-[8px]">
                {getTotalCartItems()}
              </div>
            </button>
          </Link>
          <button
            className="block md:hidden w-7"
            onClick={() => {
              sethamBurger(!hamBurger);
            }}
          >
            <img
              src={hamBurger ? x_icon : menu_icon}
              alt="menu icon"
              className="w-full"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
