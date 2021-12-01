import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {
  getProductList,
  deleteProduct,
} from "../../redux/actions/productActions";

import "./Products.css";

function Products() {
  let products = 0;
  const dispatch = useDispatch();
  products = useSelector((state) => state.allProducts.products.data);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch, products]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProductList());
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    {
      field: "productName",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.productName}
          </div>
        );
      },
    },
    { field: "quantity", headerName: "Quantity", width: 200 },
    {
      field: "productType",
      headerName: "Product Type",
      width: 190,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.id}>
              <button className="productListEdit" onClick={() => {}}>
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => {
                handleDelete(params.id);
              }}
            />
          </>
        );
      },
    },
  ];
  if (!products) return <p></p>;
  return (
    <div className="productList">
      <Link to="/newProduct">
        <button className="productAddButton">Add Product</button>
      </Link>

      <DataGrid
        getRowId={(row) => row._id}
        rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}

export default Products;
