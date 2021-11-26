import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./NewUser.css";
import { addUserData } from "../../redux/actions/userActions";
import {
  phoneRegx,
  nameRegx,
  emailRegx,
} from "../../Validation/RegxValidations";

function NewUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [role, setRole] = useState();
  const [contact, setContact] = useState();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const userError = useSelector((state) => state.allUser.error);

  const user = [
    {
      label: "Full Name",
      type: "text",
      placeholder: "John Smith",
      isRole: false,
      error: nameError,
    },
    {
      label: "Email",
      type: "text",
      placeholder: "john@gmail.com",
      isRole: false,
      error: userError ? userError : emailError,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "password",
      isRole: false,
      error: passwordError,
    },
    {
      label: "Phone",
      type: "text",
      placeholder: "phone",
      isRole: false,
      error: phoneError,
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
    } else if (label === "Email") {
      setEmail(e.target.value);
    } else if (label === "Password") {
      setPassword(e.target.value);
    } else if (label === "Phone") {
      setContact(e.target.value);
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const isPhoneValid = phoneRegx.test(contact);
    const isNameValid = nameRegx.test(name);
    const isEmailValid = emailRegx.test(email);

    if (!isNameValid) {
      setNameError("Name Must be alphabets");
    } else if (!isEmailValid) {
      setEmailError("Enter Correct Email");
    } else if (password.length < 6) {
      setPasswordError("Pasword must be 6 character long");
    } else if (!isPhoneValid) {
      setPhoneError("Enter a valid contact number");
    } else {
      const userList = { name, email, password, contact, role };
      dispatch(addUserData(userList));
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
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        {user.map((user, index) => {
          return (
            <div key={index} className="newUserItem">
              <label>{user.label}</label>
              {renderInputComponent(user)}
              <p style={{ color: "red" }}>{user.error}</p>
            </div>
          );
        })}

        <button className="newUserButton" onClick={(e) => handleAddUser(e)}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default NewUser;
