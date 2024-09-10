import AddProduct from "../Components/AddProduct/AddProduct.jsx";
import ProductList from "../Components/ProductList/ProductList.jsx";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default Admin;