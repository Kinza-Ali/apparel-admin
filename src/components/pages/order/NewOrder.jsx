import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import "./NewOrder.css";
import { addOrder } from "../../redux/actions/orderActions";
import { getProductById } from "../../redux/actions/productActions";

function NewOrder() {
  const dispatch = useDispatch();
  const history = useHistory();

  // let productIdError = "";
  const productIdError = useSelector((state) => state.allProducts.error);
  const [deliveryDate, setDeliveryDate] = useState();
  const [customerId, setCustomerId] = useState();
  const [address, setAddress] = useState();
  const [itemList, setItemList] = useState([{ productId: "", quantity: "" }]);
  // const errors = [];
  const [errorMessage, setErrorMessage] = useState([
    { errorProductId: "", errorQuantity: "" },
  ]);
  const [dateError, setDateError] = useState("");
  const [id, setId] = useState();
  const order = [
    {
      label: "Customer Id",
      type: "text",
      placeholder: 34454,
    },
    {
      label: "Address",
      type: "text",
      placeholder: "Xyz - Street",
    },
    {
      label: "Delivery Date",
      type: "text",
      placeholder: "2021-03-03",
    },
  ];

  useEffect(() => {
    dispatch(getProductById(id));
    // eslint-disable-next-line
  }, [id]);

  const handleInput = (e, label) => {
    if (label === "Customer Id") {
      setCustomerId(e.target.value);
    } else if (label === "Delivery Date") {
      setDeliveryDate(e.target.value);
    } else {
      setAddress(e.target.value);
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...itemList];
    list[index][name] = value;
    setItemList(list);
    if (name === "productId") {
      setId(value);
      console.log(id);
    }
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...itemList];
    list.splice(index, 1);
    setItemList(list);
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

  const handleAddClick = (e, index) => {
    e.preventDefault();

    let errorMsg = [];
    let error = {};
    let valid = true;
    if (itemList[index].productId) {
      if (productIdError) {
        error.errorProductId = "Enter a valid product Id";
        valid = false;
      } else {
        error.errorProductId = "";
      }
    } else if (!itemList[index].productId) {
      error.errorProductId = "Enter Product Id";
      valid = false;
    } else {
      error.errorProductId = "";
    }
    if (!itemList[index].quantity) {
      error.errorQuantity = "Quantity is required";
      valid = false;
    } else if (itemList[index].quantity < 1) {
      error.errorQuantity = "Quantity must be greater than 0";
      valid = false;
    } else {
      error.errorQuantity = "";
    }
    if (valid) {
      setItemList([...itemList, { productId: "", quantity: "" }]);
    }

    errorMsg = error;
    if (index === 0) {
      setErrorMessage([errorMsg]);
    } else if (Object.keys(errorMessage).length > index) {
      errorMessage[index].errorProductId = errorMsg.errorProductId;
      errorMessage[index].errorQuantity = errorMsg.errorQuantity;
    } else {
      setErrorMessage([
        ...errorMessage,
        {
          errorProductId: errorMsg.errorProductId,
          errorQuantity: errorMsg.errorQuantity,
        },
      ]);
    }
  };

  const handleAddOrder = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    let dateRegx = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    let dateValidation = dateRegx.test(deliveryDate);
    if (!dateValidation) {
      setDateError("Enter date in YYYY-MM-DD format");
    } else {
      const orderList = {
        item: itemList,
        customerId,
        deliveryDate,
        address,
      };
      dispatch(addOrder(orderList));
      history.push({ pathname: "/orders" });
    }
  };

  return (
    <div className="newOrder">
      <h1 className="addOrderTitle">New Order</h1>
      <form className="addOrderForm">
        {itemList.map((item, index) => {
          return (
            <div key={index} className="addOrder">
              <div>
                <label>Product Id</label>
                <div>
                  <input
                    name="productId"
                    placeholder="657890456"
                    value={item.productId}
                    onChange={(e) => handleInputChange(e, index)}
                  />

                  <span style={{ color: "red" }} key={index}>
                    {errorMessage.length - 1 >= index &&
                      errorMessage[index].errorProductId}
                  </span>
                </div>
              </div>
              <div>
                <label> Quantity </label>
                <div>
                  <input
                    className="ml10"
                    name="quantity"
                    placeholder="23"
                    value={item.quantity}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </div>
                <span style={{ color: "red" }} key={index}>
                  {errorMessage.length - 1 >= index &&
                    errorMessage[index].errorQuantity}
                </span>
              </div>
              <div className="addOrder">
                {itemList.length !== 1 && (
                  <button
                    className="mr10"
                    onClick={() => handleRemoveClick(index)}
                  >
                    <RemoveOutlinedIcon />
                  </button>
                )}
                {itemList.length - 1 === index && (
                  <button
                    className="ml10"
                    onClick={(e) => handleAddClick(e, index)}
                  >
                    <AddIcon />
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {order.map((order, index) => {
          return (
            <div className="addOrderItem" key={index}>
              <label>{order.label}</label>
              {renderInputComponent(order)}
            </div>
          );
        })}
        <p style={{ color: "red", paddingRight: 20, marginTop: 20 }}>
          {dateError}
        </p>
        <button className="addOrderButton" onClick={(e) => handleAddOrder(e)}>
          Add Order
        </button>
      </form>
    </div>
  );
}

export default NewOrder;
