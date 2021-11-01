import React from "react";
import "./NewProduct.css";

function newProducts() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" accept="image/*" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Sweat Shirts" />
        </div>
        <div className="addProductItem">
          <label>Quantity</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Product Type</label>
          <input type="text" placeholder="Clothing" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="6,000 PKR" />
        </div>

        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}

export default newProducts;
