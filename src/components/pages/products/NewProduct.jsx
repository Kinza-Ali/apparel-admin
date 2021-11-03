import React from "react";
import "./NewProduct.css";

function newProducts() {
  const products = [
    {
      label: "Image",
      type: "file",
      isFile: true,
    },
    {
      label: "Quantity",
      type: "text",
      isFile: false,
      placeholder: 12,
    },
    {
      label: "Product Name",
      type: "text",
      isFile: false,
      placeholder: "add product name",
    },
    {
      label: "Quantity",
      type: "text",
      isFile: false,
      placeholder: "33",
    },
    {
      label: "Price",
      type: "text",
      isFile: false,
      placeholder: "price in PKR",
    },
  ];

  const renderInputComponent = (product) => {
    if (product.isFile) {
      return <input type={product.type} accept="image/*" />;
    }
    return <input type={product.type} placeholder={product.placeholder} />;
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        {products.map((product) => {
          <div className="addProductItem">
            <label>{product.label}</label>
            {renderInputComponent(product)}
          </div>;
        })}
        {products.map((product) => {
          return (
            <div className="addProductItem">
              <label>{product.label}</label>
              {renderInputComponent(product)}
            </div>
          );
        })}
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}

export default newProducts;
