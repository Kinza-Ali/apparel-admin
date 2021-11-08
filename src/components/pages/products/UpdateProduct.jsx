import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UpdateProduct.css";
import { Publish } from "@material-ui/icons";
import { updateProduct } from "../../redux/actions/productActions";
// import { Link } from "react-router-dom";

function UpdateProduct({}) {
  const { productId } = useParams();
  const [productName, setProductName] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [productType, setProductType] = useState();
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setselectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const [image, setImage] = useState(""); //not used yet
  const products = useSelector((state) => state.allProducts.products.data);
  const product = products;

  const dispatch = useDispatch();

  const handleUpdate = () => {
    const formData = new FormData();

    formData.append("productName", productName);
    formData.append("image", selectedFile);
    formData.append("productType", productType);
    formData.append("price", price);
    formData.append("quantity", quantity);
    // let productItem = {
    //   productName,
    //   productType,
    //   price,
    //   quantity,
    //   // image: JSON.stringify(previewSource),
    // };
    console.log("about to call api");
    dispatch(updateProduct(productId, formData));
  };

  const fileSelectedHandler = (file) => {
    previewFile(file);
    setselectedFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
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
            <label>Product Name</label>
            <input
              type="text"
              // placeholder={product.productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label>Quantity</label>
            <input
              type="quantity"
              // placeholder={product.quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label>Price</label>
            <input
              type="price"
              // placeholder={product.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>Product Type</label>
            <input
              type="productType"
              // placeholder={product.productType}
              onChange={(e) => setProductType(e.target.value)}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                name="image"
                value={fileInputState}
                onChange={(e) => fileSelectedHandler(e.target.files[0])}
              />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
        {previewSource && (
          <img
            src={previewSource}
            alt="chosen"
            style={{ heigth: "200px", width: "200px" }}
          />
        )}
      </div>
    </div>
  );
}

export default UpdateProduct;
