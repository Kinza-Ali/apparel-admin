import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UpdateProduct.css";
import { Publish } from "@material-ui/icons";
import { updateProduct } from "../../redux/actions/productActions";

function UpdateProduct({}) {
  const { productId } = useParams();
  const [productName, setProductName] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [productType, setProductType] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const products = useSelector((state) => state.allProducts.products.data);
  const product = products;
  console.log("image", selectedImage);
  // const product = products.filter((item) => item._id === productId)[0];
  // console.log("products", JSON.stringify(product));

  const dispatch = useDispatch();

  // let productItem = {
  //   productName,
  //   image: selectedImage,
  //   productType,
  //   price,
  //   quantity,
  // };

  const handleUpdate = () => {
    // console.log("selectedImage");

    let formData = new FormData();
    formData.append("productName", productName);
    formData.append("productType", productType);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("image", selectedImage);

    dispatch(updateProduct(productId, formData));

    // console.log("Inside handle update", JSON.stringify(products));
  };

  const fileSelectedHandler = (file) => {
    setSelectedImage(file);
  };

  // const fileUploadHandler = () =>{
  //   let formData = newFormData();
  //   formData.append("productName",productName)
  //   formData.append("productType",productType)
  //   formData.append("price",price)
  //   formData.append("quantity",quantity)
  //   formData.append("image",selectedImage)
  // }

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
            <img src={product.image} alt="" className="productInfoImg" />
            <span className="productName">{product.productName}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Quantity:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Product Type:</span>
              <span className="productInfoValue">{product.productType}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoValue">{product.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder={product.productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label>Quantity</label>
            <input
              type="quantity"
              placeholder={product.quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label>Price</label>
            <input
              type="price"
              placeholder={product.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>Product Type</label>
            <input
              type="productType"
              placeholder={product.productType}
              onChange={(e) => setProductType(e.target.value)}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.image} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                // accept="image/*"
                onChange={(e) => fileSelectedHandler(e.target.files[0])}
              />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
