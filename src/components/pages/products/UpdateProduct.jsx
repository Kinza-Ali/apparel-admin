import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Publish } from "@material-ui/icons";
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
    console.log(e.target.value);
    setProductType(e.target.value);
  };
  // const products = useSelector((state) => state.allProducts.products.data);
  // const product = products;

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

    console.log(productName);
    if (productName.length < 3) {
      setNameError("Product name must be greater than 3 characters");
    } else if (quantity < 1) {
      setQuantityError("Quantity must be greater than 0");
    } else if (price < 50) {
      setPriceError("price must be greater than 50");
    } else {
      let productItem = {
        productName,
        productType,
        price,
        quantity,
      };
      console.log("about to call api");
      dispatch(updateProduct(productId, productItem));
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
            {products.map((product) => {
              return (
                <div className="addProductItem">
                  <label>{product.label}</label>
                  {renderInputComponent(product)}
                  <p style={{ color: "red" }}>{product.error}</p>
                </div>
              );
            })}
          </div>
          <div className="productFormRight">
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
