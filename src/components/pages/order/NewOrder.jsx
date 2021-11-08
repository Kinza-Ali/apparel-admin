import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import "./NewOrder.css";
import { addOrder } from "../../redux/actions/orderActions";

function NewOrder() {
  const dispatch = useDispatch();
  // const [productId, setProductId] = useState();
  // const [quantity, setQuantity] = useState();
  const [deliveryDate, setDeliveryDate] = useState();
  const [customerId, setCustomerId] = useState();
  const [itemList, setItemList] = useState([
    { productId: "", quantity: "" },
    { productId: "", quantity: "" },
  ]);
  const order = [
    // {
    //   label: "Product Id",
    //   type: "text",
    //   placeholder: 34454,
    // },
    {
      label: "Customer Id",
      type: "text",
      placeholder: 34454,
    },
    // {
    //   label: "Quantity",
    //   type: "text",
    //   placeholder: 22,
    // },
    {
      label: "Delivery Date",
      type: "text",
      placeholder: "2021-03-03",
    },
  ];

  const renderInputComponent = (order) => {
    return (
      <input
        type={order.type}
        placeholder={order.placeholder}
        onChange={(e) => handleInput(e, order.label)}
      />
    );
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...itemList];
    list[index][name] = value;
    setItemList(list);
    console.log(itemList);
  };

  const handleAddClick = () => {
    // console.log(JSON.stringify(itemList));
    setItemList([...itemList, { productId: "", quantity: "" }]);
  };

  const handeleRemoveInputField = (index) => {
    const list = [...itemList];
    list.splice(index, 1);
    setItemList(list);
  };

  const handleInput = (e, label) => {
    // if (label === "Product Id") {
    //   setProductId(e.target.value);
    // } else
    if (label === "Customer Id") {
      setCustomerId(e.target.value);
    }
    // else if (label === "Quantity") {
    //   setQuantity(e.target.value);
    // }
    else if (label === "Delivery Date") {
      setDeliveryDate(e.target.value);
    }
  };

  const handleAddOrder = () => {
    const orderList = {
      // item: [{ productId, quantity }],
      itemList,
      customerId,

      deliveryDate,
    };
    dispatch(addOrder(orderList));
  };
  return (
    <div className="newOrder">
      <h1 className="addOrderTitle">New Order</h1>
      <form className="addOrderForm">
        {itemList.map((item, index) => {
          console.log(index);
          return (
            <div key={index} className="addOrder">
              <label> Product Id</label>
              <input
                type="text"
                name="productId"
                placeholder="45678903456"
                value={item.productId}
                onChange={(e) => handleChange(e, index)}
              />
              <label> Quantity</label>
              <input
                type="text"
                name="quantity"
                placeholder="23"
                value={item.quantity}
                onChange={(e) => handleChange(e, index)}
              />
              <button onClick={() => handeleRemoveInputField(index)}>
                <RemoveOutlinedIcon />
              </button>
              <button onClick={handleAddClick}>Add</button>
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
