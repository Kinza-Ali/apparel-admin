import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import "./NewOrder.css";
import { addOrder } from "../../redux/actions/orderActions";

function NewOrder() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [deliveryDate, setDeliveryDate] = useState();
  const [customerId, setCustomerId] = useState();
  const [itemList, setItemList] = useState([{ productId: "", quantity: "" }]);

  const order = [
    {
      label: "Customer Id",
      type: "text",
      placeholder: 34454,
    },
    {
      label: "Delivery Date",
      type: "text",
      placeholder: "2021-03-03",
    },
  ];

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...itemList];
    list[index][name] = value;
    setItemList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...itemList];
    list.splice(index, 1);
    setItemList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setItemList([...itemList, { productId: "", quantity: "" }]);
  };

  const renderInputComponent = (order) => {
    return (
      <input
        type={order.type}
        placeholder={order.placeholder}
        onChange={(e) => handleInput(e, order.label)}
      />
    );
  };

  const handleInput = (e, label) => {
    if (label === "Customer Id") {
      setCustomerId(e.target.value);
    } else if (label === "Delivery Date") {
      setDeliveryDate(e.target.value);
    }
  };

  const handleAddOrder = () => {
    const orderList = {
      item: itemList,
      customerId,
      deliveryDate,
    };

    dispatch(addOrder(orderList));
    history.push({ pathname: "/orders" });
  };
  return (
    <div className="newOrder">
      <h1 className="addOrderTitle">New Order</h1>
      <form className="addOrderForm">
        {itemList.map((x, i) => {
          return (
            <div key={i} className="addOrder">
              <label>Product Id</label>
              <input
                name="productId"
                placeholder="657890456"
                value={x.productId}
                onChange={(e) => handleInputChange(e, i)}
              />
              <label> Quantity </label>
              <input
                className="ml10"
                name="quantity"
                placeholder="23"
                value={x.quantity}
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="addOrder">
                {itemList.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    <RemoveOutlinedIcon />
                  </button>
                )}
                {itemList.length - 1 === i && (
                  <button className="ml10" onClick={handleAddClick}>
                    <AddIcon />
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {order.map((order) => {
          return (
            <div className="addOrderItem">
              <label>{order.label}</label>
              {renderInputComponent(order)}
            </div>
          );
        })}

        <button className="addOrderButton" onClick={handleAddOrder}>
          Add Order
        </button>
      </form>
    </div>
  );
}

export default NewOrder;
