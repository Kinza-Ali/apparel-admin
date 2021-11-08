import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UpdateOrder.css";
import { updateOrder } from "../../redux/actions/orderActions";

function UpdateOrder() {
  const dispatch = useDispatch();
  let history = useHistory();
  const { orderId } = useParams();
  const [deliveryDate, setDeliveryDate] = useState();

  const handleInput = (e) => {
    setDeliveryDate(e.target.value);
  };

  const handleUpdate = () => {
    dispatch(updateOrder(orderId, deliveryDate));
    history.push({ pathname: "/orders" });
  };

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
              <span className="orderInfoValue">2021-02-01</span>
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
            <input
              type="text"
              placeholder="2021-03-01"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="orderFormRight">
            <button className="orderButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateOrder;
