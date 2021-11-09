import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UpdateUser.css";
import {
  Person,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import {
  updateUserData,
  getUserDataById,
} from "../../redux/actions/userActions";

function UpdateUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [contact, setContact] = useState();
  // const user = useSelector((state) => state.allUser.user.data);
  const userList = [
    {
      label: "Full Name",
      placeholder: "user.name",
    },
    {
      label: "Role",
      placeholder: "user.role",
    },
    {
      label: "Phone",
      placeholder: "user.contact",
    },
  ];
  // useEffect(() => {
  //   console.log("calling use effect");
  //   dispatch(getUserDataById(userId));
  // }, [dispatch]);
  // console.log(user._id + " FORM UPDATE USER");

  const handleInput = (e, label) => {
    if (label === "Full Name") {
      setName(e.target.value);
    } else if (label === "Role") {
      setRole(e.target.value);
    } else if (label === "Phone") {
      setContact(e.target.value);
    }
  };
  const handleUpdate = () => {
    const user = {
      name,
      contact,
      role,
    };
    dispatch(updateUserData(userId, user));
    history.push({ pathname: "/user" });
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButtons">Add User</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck</span>
            </div>
            <div className="userShowInfo">
              <Person className="userShowIcon" />
              <span className="userShowInfoTitle">User</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">090078601</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              {userList.map((user, i) => {
                return (
                  <div key={i} className="userUpdateItem">
                    <label>{user.label}</label>
                    <input
                      type="text"
                      placeholder={user.placeholder}
                      className="userUpdateInput"
                      onChange={(e) => handleInput(e, user.label)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="userUpdateRight">
              <button className="userUpdateButton" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
