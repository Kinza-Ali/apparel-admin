import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { getProducts } from "../../redux/actions/productActions";
//not required
// import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Products.css";

function Products() {
  let products = 0;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("calling use effect");
    dispatch(getProducts());
  }, [dispatch]);
  products = useSelector((state) => state.allProducts.products.data);
  console.log(products);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
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
          <div>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  if (!products) return <p></p>;
  return (
    <div className="productList">
      <div className="topButtons">
        <Link to="/searchProduct">
          <button className="productSearchButton">Search Product</button>
        </Link>
        <Link to="/newProduct">
          <button className="productAddButton">Add Product</button>
        </Link>
      </div>
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
