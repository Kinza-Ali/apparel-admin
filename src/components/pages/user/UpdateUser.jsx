import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./UpdateUser.css";
import {
  Person,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import { updateUserData } from "../../redux/actions/userActions";
import { phoneRegx, nameRegx } from "../../Validation/RegxValidations";

function UpdateUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [contact, setContact] = useState();
  const [errorValidation, setErrorValidation] = useState("");

  const userList = [
    {
      label: "Full Name",
      placeholder: "John",
      isRole: false,
    },
    {
      label: "Phone",
      placeholder: "1824783782748",
      isRole: false,
    },
    {
      label: "Role",
      isRole: true,
    },
  ];

  const handleRadioButton = (e) => {
    setRole(e.target.value);
  };

  const handleInput = (e, label) => {
    if (label === "Full Name") {
      setName(e.target.value);
    } else if (label === "Phone") {
      setContact(e.target.value);
    }
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const isPhoneValid = phoneRegx.test(contact);
    const isNameValid = nameRegx.test(name);
    if (!isNameValid) {
      setErrorValidation("Name Must be alphabets");
    } else if (!isPhoneValid) {
      setErrorValidation("Phone should be +91 0123456789");
    } else {
      const user = {
        name,
        contact,
        role,
      };
      dispatch(updateUserData(userId, user));
      history.push({ pathname: "/users" });
    }
  };
  const renderInputComponent = (user) => {
    if (user.isRole) {
      return (
        <div>
          <div className="newUserRole">
            <input
              type="radio"
              name="role"
              id="admin"
              value="1"
              onChange={(e) => handleRadioButton(e)}
            />
            <label htmlFor="admin">Admin</label>
            <input
              type="radio"
              name="role"
              id="user"
              value="2"
              onChange={(e) => handleRadioButton(e)}
            />
            <label htmlFor="user">User</label>
          </div>
        </div>
      );
    }
    return (
      <input
        type={user.type}
        placeholder={user.placeholder}
        onChange={(e) => handleInput(e, user.label)}
      />
    );
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
                    {renderInputComponent(user)}
                  </div>
                );
              })}
              <p style={{ color: "red" }}>{errorValidation}</p>
            </div>
            <div className="userUpdateRight">
              <button
                className="userUpdateButton"
                onClick={(e) => handleUpdate(e)}
              >
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
