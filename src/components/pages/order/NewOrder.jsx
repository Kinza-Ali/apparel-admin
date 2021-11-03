import React from "react";
import "./NewOrder.css";

function NewOrder() {
  const order = [
    {
      label: "productId",
      type: "text",
      placeholder: 34454,
    },
    {
      label: "quantity",
      type: "text",
      placeholder: 22,
    },
    {
      label: "Delivery Date",
      type: "text",
      placeholder: "10-02-22",
    },
  ];

  const renderInputComponent = (order) => {
    if (order.isFile) {
      return <input type={order.type} accept="image/*" />;
    }
    return <input type={order.type} placeholder={order.placeholder} />;
  };

  return (
    <div className="newOrder">
      <h1 className="addOrderTitle">New Order</h1>
      <form className="addOrderForm">
        <div className="addOrderItem"></div>
        {order.map((order) => {
          return (
            <div className="addOrderItem">
              <label>{order.label}</label>
              {renderInputComponent(order)}
            </div>
          );
        })}

        <button className="addOrderButton">Add Order</button>
      </form>
    </div>
  );
}

export default NewOrder;
