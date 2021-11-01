import React from "react";
import "./NewUser.css";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <div className="newUserRole">
            <input type="radio" name="role" id="admin" value="admin" />
            <label for="admin">Admin</label>
            <input type="radio" name="role" id="user" value="user" />
            <label for="user">User</label>
          </div>
        </div>
        <button className="newUserButton">Add User</button>
      </form>
    </div>
  );
}

export default NewUser;
