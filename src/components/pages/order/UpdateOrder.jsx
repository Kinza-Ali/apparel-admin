import React from "react";
import "./UpdateOrder.css";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";

function UpdateOrder() {
  const order = {
    productId: 48754,
    quantity: 2,
    deliveryDate: "12-04-21",
    totalPrice: 484,
    customerId: 59859,
  };
  console.log(order);
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
            {Object.keys(order).map((key, index) => {
              return (
                <div className="orderInfoItem">
                  <span className="orderInfo">{key}</span>
                  <span className="orderInfoValue">{order[key]}</span>
                </div>
              );
            })}
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
