import React from "react";
import "./UpdateOrder.css";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";

function UpdateOrder() {
  return (
    <div className="order">
      <div className="orderTitleContainer">
        <h1 className="orderTitle">Order</h1>
        <Link to="/newOrder">
          <button className="orderAddButtons">Add Order</button>
        </Link>
      </div>
      <div className="orderTop">
        <div className="orderTopRight">
          <div className="orderInfoTop">
            <span className="orderName">Order Id</span>
          </div>
          <div className="orderInfoTop">
            <span className="orderItem">Items: </span>
          </div>
          <div className="orderInfoBottom">
            <div className="orderInfoItem">
              <span className="orderInfoKey">Product Id:</span>
              <span className="orderInfoValue">44474587</span>
            </div>
            <div className="orderInfoItem">
              <span className="orderInfoKey">Quantity:</span>
              <span className="orderInfoValue">3</span>
            </div>
            <div className="orderInfoItem">
              <span className="orderInfoKey">Delivery Date:</span>
              <span className="orderInfoValue">12-02-22</span>
            </div>
            <div className="ordeInfoItem">
              <span className="orderInfoKey">Total Price:</span>
              <span className="orderInfoValue">5,000 PKR</span>
            </div>
            <div className="ordeInfoItem">
              <span className="orderInfoKey">Customer Id:</span>
              <span className="orderInfoValue">4465784</span>
            </div>
          </div>
        </div>
      </div>
      <div className="orderBottom">
        <form className="orderForm">
          <div className="orderFormLeft">
            <label>Delivery Date</label>
            <input type="text" placeholder="12-03-22" />
          </div>
          <div className="orderFormRight">
            <button className="orderButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateOrder;
