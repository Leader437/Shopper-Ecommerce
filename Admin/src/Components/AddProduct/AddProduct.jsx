import { useState } from "react";
import upload_logo from "../../Assets/upload-icon.png";

const AddProduct = () => {
  const [Img, setImg] = useState(false);
  const [ProductDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "men",
    new_price: 0,
    old_price: 0,
  });

  const URL = import.meta.env.VITE_BACKEND_URL;

  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };
  const handleAdd = (e) => {
    setProductDetails({ ...ProductDetails, [e.target.name]: e.target.value });
  };

  const uploadProduct = async (e) => {
    e.preventDefault();
    console.log(ProductDetails);

    let responseData;
    let product = ProductDetails;

    let formData = new FormData();

    formData.append("name", ProductDetails.name);
    formData.append("category", ProductDetails.category);
    formData.append("old_price", ProductDetails.old_price);
    formData.append("new_price", ProductDetails.new_price);
    formData.append("product", Img);

    await fetch(`${URL}/upload`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      await fetch(`${URL}/addproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          responseData = data;
          data.success ? alert("Product Added") : alert("Failed");
        });
    }

    if (responseData.success) {
      setProductDetails({
        name: "",
        image: "",
        category: "men",
        new_price: 0,
        old_price: 0,
      });
      setImg(false)
    }
  };

  return (
    <div className="bg-white m-4 p-6 md:p-10 lg:w-1/2 h-fit">
      <form method="POST" onSubmit={uploadProduct}>
        <div className="w-full mb-5">
          <p className="text-sm text-slate-600 mb-2">Product Title</p>
          <input
            type="text"
            name="name"
            value={ProductDetails.name}
            onChange={handleAdd}
            placeholder="Type here"
            className="border-[0.5px] border-solid border-slate-300 px-4 py-3 text-xs rounded-sm w-full outline-none"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="w-[48%] mb-5">
            <p className="text-sm text-slate-600 mb-2">Price</p>
            <input
              type="Number"
              name="old_price"
              value={ProductDetails.old_price}
              onChange={handleAdd}
              placeholder="Type here"
              className="border-[0.5px] border-solid border-slate-300 px-4 py-3 text-xs rounded-sm w-full outline-none"
              required
            />
          </div>
          <div className="w-[48%] mb-5">
            <p className="text-sm text-slate-600 mb-2">Offer Price</p>
            <input
              type="Number"
              name="new_price"
              value={ProductDetails.new_price}
              onChange={handleAdd}
              placeholder="Type here"
              className="border-[0.5px] border-solid border-slate-300 px-4 py-3 text-xs rounded-sm w-full outline-none"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <p className="text-sm text-slate-600 mb-2">Product Category</p>
          <select
            name="category"
            value={ProductDetails.category}
            onChange={handleAdd}
            className="border-[0.5px] border-solid border-slate-300 px-2 py-2 text-xs text-slate-600 outline-none"
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kids</option>
          </select>
        </div>
        <div className="mb-5">
          <p className="text-sm text-slate-600 mb-2">Product Image</p>
          <div
            className={`bg-slate-100 w-fit rounded-sm cursor-pointer ${
              Img ? "p-0" : "p-8"
            }`}
          >
            <label htmlFor="file-input">
              <img
                src={Img ? URL.createObjectURL(Img) : upload_logo}
                alt="Upload logo"
                className={`cursor-pointer ${Img ? "w-28" : "w-10"}`}
              />
            </label>
            <input
              type="file"
              name="image"
              id="file-input"
              hidden
              onChange={handleImg}
            />
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 uppercase text-xs text-white px-14 py-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
