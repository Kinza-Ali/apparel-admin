import React from "react";
import "./UpdateProduct.css";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";

function UpdateProduct() {
  const product = {
    id: 48754,
    quantity: 2,
    productType: 2,
    price: 484,
  };
  const productUpdate = [
    {
      label: "Product Name",
      type: "text",
      isFile: false,
      placeholder: "Top",
    },
    {
      label: "Quantity",
      type: "text",
      isFile: false,
      placeholder: 12,
    },
    {
      label: "Product Type",
      type: "text",
      isFile: false,
      placeholder: "2",
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
      placeholder: "4849",
    },
  ];
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButtons">Add Product</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6T7AEoS7OO3z6byiJZaT8l2pmGo8BJP2tw&usqp=CAU"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Bag</span>
          </div>
          <div className="productInfoBottom">
            {Object.keys(product).map((key, index) => {
              return (
                <div className="productInfoItem">
                  <span className="productInfoKey">{key}</span>
                  <span className="productInfoValue">{product[key]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            {productUpdate.map((product) => {
              return (
                <>
                  <label>{product.label}</label>
                  <input
                    type={product.type}
                    placeholder={product.placeholder}
                  />
                </>
              );
            })}
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6T7AEoS7OO3z6byiJZaT8l2pmGo8BJP2tw&usqp=CAU"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
