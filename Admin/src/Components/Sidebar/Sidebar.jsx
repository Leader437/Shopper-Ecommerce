import cart_logo from "../../Assets/sidebar_cart.png";
import shirt_logo from "../../Assets/sidebar_product.png";
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white w-full flex gap-2 justify-around md:flex-col md:justify-normal md:gap-4 md:max-w-60 lg:max-w-64 md:min-h-screen p-4">
        <Link to={"/addProduct"}>
            <div className="flex gap-2 items-center p-4 bg-slate-100">
                <img src={cart_logo} alt="colorful cart logo" className="w-7"/>
                <h6 className="text-blackHeading font-medium text-sm">Add Product</h6>
            </div>
        </Link>
        <Link to={"/productList"}>
            <div className="flex gap-2 items-center p-4 bg-slate-100">
                <img src={shirt_logo} alt="colorful t-shirt logo" className="w-7"/>
                <h6 className="text-blackHeading font-medium text-sm">Product List</h6>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar