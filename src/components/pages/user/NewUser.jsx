import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./NewUser.css";
import { addUserData } from "../../redux/actions/userActions";

function NewUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [contact, setContact] = useState();

  const user = [
    {
      label: "Full Name",
      type: "text",
      placeholder: "John Smith",
      isRole: false,
    },
    {
      label: "Email",
      type: "text",
      placeholder: "john@gmail.com",
      isRole: false,
    },
    {
      label: "Password",
      type: "text",
      placeholder: "password",
      isRole: false,
    },
    {
      label: "Phone",
      type: "text",
      placeholder: "phone",
      isRole: false,
    },
    {
      label: "Role",
      isRole: true,
    },
  ];

  const handleRadioButton = (e) => {
    console.log(e.target.value);
    setRole(e.target.value);
  };

  const handleInput = (e, label) => {
    if (label === "Full Name") {
      setName(e.target.value);
    } else if (label === "Email") {
      setEmail(e.target.value);
    } else if (label === "Password") {
      setPassword(e.target.value);
    } else if (label === "Phone") {
      setContact(e.target.value);
    }
  };

  const handleAddUser = () => {
    const userList = { name, email, password, contact, role };
    dispatch(addUserData(userList));
    history.push({ pathname: "/users" });
  };

  const renderInputComponent = (user) => {
    if (user.isRole) {
      return (
        <>
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
        </>
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
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        {user.map((user, index) => {
          return (
            <div key={index} className="newUserItem">
              <label>{user.label}</label>
              {renderInputComponent(user)}
            </div>
          );
        })}
        <button className="newUserButton" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default NewUser;
