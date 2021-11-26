import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchProduct.css";
import { getProductById } from "../../redux/actions/productActions";

function SearchProduct() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.getProductById.products.data);

  const [id, setId] = useState();
  const getData = () => {
    dispatch(getProductById(id));
  };

  return (
    <div className="productSearch">
      <div>
        <input
          placeholder="Search Product By id"
          onChange={(e) => setId(e.target.value)}
          searchText="This is initial search text"
          // classNames="searchInput"
        />
        <button onClick={getData}>Search</button>
      </div>
      {!product ? (
        <p></p>
      ) : (
        <>
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
          </div>
          <div className="productTop">
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product.image} alt="" className="productInfoImg" />
                <span className="productName">Bag</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{product._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Quantity:</span>
                  <span className="productInfoValue">{product.quantity}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Product Type:</span>
                  <span className="productInfoValue">
                    {product.productType}
                  </span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">Price:</span>
                  <span className="productInfoValue">{product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchProduct;
