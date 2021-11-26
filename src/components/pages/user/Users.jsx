import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import "./Users.css";
import {
  getUserList,
  deleteUser,
  // getUserDataById,
} from "../../redux/actions/userActions";

function Users() {
  const dispatch = useDispatch();
  let user = 0;
  user = useSelector((state) => state.allUser.user.data);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    dispatch(getUserList());
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "contact",
      headerName: "Contact No",
      width: 190,
    },
    {
      field: "role",
      headerName: "Role",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/users/" + params.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.id)}
            />
          </div>
        );
      },
    },
  ];
  if (!user) return <p></p>;
  return (
    <div className="userList">
      <Link to="/newUser">
        <button className="userAddButton">Add User</button>
      </Link>

      <DataGrid
        getRowId={(row) => row._id}
        rows={user}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}

export default Users;
