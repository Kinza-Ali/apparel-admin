import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./NewProduct.css";
import { addProduct } from "../../redux/actions/productActions";

function NewProducts() {
  const dispatch = useDispatch();

  const [productName, setProductName] = useState();
  const [quantity, setQuantity] = useState();
  const [productType, setProductType] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  // console.log("testing... " + productName, productType, price, quantity);

  // const fileSelectedHandler = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  //   console.log(file);
  // };

  const handleAddProduct = () => {
    const formData = new FormData();
    console.log(image);
    formData.append("productName", productName);
    formData.append("image", image);
    formData.append("productType", productType);
    formData.append("price", price);
    formData.append("quantity", quantity);
    // let productItem = {
    //   productName,
    //   image,
    //   productType,
    //   price,
    //   quantity,

    //   // image: JSON.stringify(previewSource),
    // };
    console.log("about to call api");
    dispatch(addProduct(formData));
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="Sweat Shirts"
            onChange={(e) => {
              setProductName(e.target.value);
              // console.log(productName);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>Quantity</label>
          <input
            type="text"
            placeholder="123"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Product Type</label>
          <input
            type="text"
            placeholder="Clothing"
            onChange={(e) => setProductType(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="text"
            placeholder="6,000 PKR"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button className="addProductButton" onClick={handleAddProduct}>
          Create
        </button>
      </form>
    </div>
  );
}

export default NewProducts;
