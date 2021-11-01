import React from "react";
import "./NewOrder.css";

function NewOrder() {
  return (
    <div className="newOrder">
      <h1 className="addOrderTitle">New Order</h1>
      <form className="addOrderForm">
        <div className="addOrderItem"></div>
        <div className="addOrderItem">
          <label>ProdcutId</label>
          <input type="text" placeholder="48454" />
        </div>
        <div className="addOrderItem">
          <label>Quantity</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addOrderItem">
          <label>Delivery Date</label>
          <input type="text" placeholder="10-10-1111" />
        </div>

        <button className="addOrderButton">Add Order</button>
      </form>
    </div>
  );
}

export default NewOrder;
