import React from "react";
import "./NewUser.css";

function NewUser() {
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

  const renderInputComponent = (user) => {
    if (user.isRole) {
      return (
        <>
          {" "}
          <div className="newUserRole">
            <input type="radio" name="role" id="admin" value="admin" />
            <label for="admin">Admin</label>
            <input type="radio" name="role" id="user" value="user" />
            <label for="user">User</label>
          </div>
        </>
      );
    }
    return <input type={user.type} placeholder={user.placeholder} />;
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        {user.map((user) => {
          return (
            <div className="newUserItem">
              <label>{user.label}</label>
              {renderInputComponent(user)}
            </div>
          );
        })}
        <button className="newUserButton">Add User</button>
      </form>
    </div>
  );
}

export default NewUser;
