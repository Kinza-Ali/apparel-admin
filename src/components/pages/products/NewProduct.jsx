import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./NewProduct.css";
import { addProduct } from "../../redux/actions/productActions";

function NewProducts() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [productName, setProductName] = useState();
  const [quantity, setQuantity] = useState();
  const [productType, setProductType] = useState();
  const [price, setPrice] = useState();
  const [nameError, setNameError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [image, setImage] = useState("");

  const products = [
    {
      label: "Product Name",
      type: "text",
      placeholder: "Sweat Shirt",
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
      placeholder: "price in PKR",
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
    }
    return (
      <input
        type={product.type}
        placeholder={product.placeholder}
        onChange={(e) => handleInput(e, product.label)}
      />
    );
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (productName.length < 3) {
      setNameError("Product name must be greater than 3 characters");
    } else if (quantity < 1) {
      setQuantityError("Quantity must be greater than 0");
    } else if (price < 50) {
      setPriceError("price must be greater than 50");
    } else {
      const formData = new FormData();

      formData.append("productName", productName);
      formData.append("image", image);
      formData.append("productType", productType);
      formData.append("price", price);
      formData.append("quantity", quantity);

      dispatch(addProduct(formData));
      history.push({ pathname: "/products" });
    }
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

        {products.map((product) => {
          return (
            <div className="addProductItem">
              <label>{product.label}</label>
              {renderInputComponent(product)}
              <p style={{ color: "red" }}>{product.error}</p>
            </div>
          );
        })}
        <button
          className="addProductButton"
          onClick={(e) => handleAddProduct(e)}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default NewProducts;
