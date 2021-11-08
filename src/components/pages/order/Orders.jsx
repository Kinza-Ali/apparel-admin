import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import "./Orders.css";
import { getOrders, deleteOrder } from "../../redux/actions/orderActions";

function Orders() {
  let order = 0;
  const dispatch = useDispatch();
  order = useSelector((state) => state.allOrder.order.data);

  useEffect(() => {
    console.log("calling use effect");
    dispatch(getOrders());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("Calling handle delete");
    dispatch(deleteOrder(id));
    dispatch(getOrders());
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    {
      field: "item",
      headerName: "Order",
      width: 150,
      renderCell: (params) => {
        let item = params.row.item;
        return (
          <div>
            {item.map((items) => {
              return (
                <div>
                  <label>ProdId: {items.productId}</label>
                  <label>Qty: {items.quantity}</label>
                </div>
              );
            })}
          </div>
        );
      },
    },
    { field: "customerId", headerName: "Customer Id", width: 200 },
    {
      field: "deliveryDate",
      headerName: "Delivery Date ",
      width: 190,
    },
    {
      field: "price",
      headerName: "Total Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.id}>
              <button className="orderListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="orderListDelete"
              onClick={() => handleDelete(params.id)}
            />
          </>
        );
      },
    },
  ];
  if (!order) return <p></p>;
  return (
    <div className="orderList">
      <Link to="/newOrder">
        <button className="orderAddButton">Add Order</button>
      </Link>
      <DataGrid
        getRowId={(row) => row._id}
        rows={order}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}

export default Orders;
