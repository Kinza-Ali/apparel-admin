import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import "./Orders.css";
import { orderRows } from "../../../dummyData";

function Orders() {
  const [data, setData] = useState(orderRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "ProductId",
      headerName: "Product Id",
      width: 200,
      renderCell: (params) => {
        return <div className="orderListItem">{params.row.item}</div>;
      },
    },
    { field: "customerId", headerName: "Customer Id", width: 200 },
    {
      field: "deliveryDate",
      headerName: "Delivery Date ",
      width: 190,
    },
    {
      field: "totalPrice",
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
            <Link to={"/order/" + params.row.id}>
              <button className="orderListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="orderListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="orderList">
      <Link to="/newOrder">
        <button className="orderAddButton">Add Order</button>
      </Link>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}

export default Orders;
