import React from "react";
import "./UpdateProduct.css";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";

function UpdateProduct() {
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
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Quantity:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Product Type:</span>
              <span className="productInfoValue">Bags</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoValue">5,000 PKR</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="bag" />
            <label>Quantity</label>
            <input type="quantity" placeholder="444" />
            <label>Price</label>
            <input type="price" placeholder="444 in PKR" />
            <label>Product Type</label>
            <input type="productType" placeholder="Bag" />
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
