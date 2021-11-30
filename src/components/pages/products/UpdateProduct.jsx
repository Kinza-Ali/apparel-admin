import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./UpdateProduct.css";
import { updateProduct } from "../../redux/actions/productActions";

function UpdateProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();
  const [productName, setProductName] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [productType, setProductType] = useState();
  const [nameError, setNameError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [priceError, setPriceError] = useState("");
  // eslint-disable-next-line
  const [image, setImage] = useState("");

  const products = [
    {
      label: "Product Name",
      type: "text",
      placeholder: "Bag",
      error: nameError,
      isType: false,
    },

    {
      label: "Quantity",
      type: "text",
      placeholder: "33",
      isType: false,
      error: quantityError,
    },
    {
      label: "Price",
      type: "text",
      placeholder: "6000",
      isType: false,
      error: priceError,
    },
    {
      label: "Product Type",
      type: "radio",
      isType: true,
    },
  ];

  const handleInput = (e, label) => {
    if (label === "Product Name") {
      setProductName(e.target.value);
    } else if (label === "Price") {
      setPrice(e.target.value);
    } else if (label === "Quantity") {
      setQuantity(e.target.value);
    }
  };

  const handleRadioButton = (e) => {
    setProductType(e.target.value);
  };

  const renderInputComponent = (product) => {
    if (product.isType) {
      return (
        <div>
          <div className="newProductType">
            <input
              type="radio"
              name="productType"
              value="1"
              onChange={(e) => handleRadioButton(e)}
            />
            <label htmlFor="clothing">Clothing</label>
            <input
              type="radio"
              name="productType"
              value="2"
              onChange={(e) => handleRadioButton(e)}
            />
            <label htmlFor="bags">Bags</label>
            <input
              type="radio"
              name="productType"
              value="3"
              onChange={(e) => handleRadioButton(e)}
            />
            <label htmlFor="shoes">Shoes</label>
            <input
              type="radio"
              name="productType"
              value="4"
              onChange={(e) => handleRadioButton(e)}
            />
            <label htmlFor="jewellery">Jewellery</label>
          </div>
        </div>
      );
    } else {
      return (
        <input
          type={product.type}
          placeholder={product.placeholder}
          onChange={(e) => handleInput(e, product.label)}
        />
      );
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (productName.length < 3) {
      setNameError("Product name must be greater than 3 characters");
    } else if (quantity < 1) {
      setQuantityError("Quantity must be greater than 0");
    } else if (price < 50) {
      setPriceError("price must be greater than 50");
    } else {
      const productList = {
        productName,
        quantity,
        price,
        productType,
      };
      dispatch(updateProduct(productId, productList));
      history.push({ pathname: "/products" });
    }
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButtons">Add Product</button>
        </Link>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            {products.map((product, index) => {
              return (
                <div className="addProductItem" key={index}>
                  <label>{product.label}</label>
                  {renderInputComponent(product)}
                  <p style={{ color: "red" }}>{product.error}</p>
                </div>
              );
            })}
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <label htmlFor="file"></label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button className="productButton" onClick={(e) => handleUpdate(e)}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
