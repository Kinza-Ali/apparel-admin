import React from "react";
import Services from "./Services";

class UserService extends Services {
  constructor() {
    super();
  }

  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("user/login", { email, password })
        .then((data) => {
          localStorage.setItem("token", data.token);
          // console.log(data);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });

  register = (email, password, name) =>
    this.post("user/login", { email, password, name });
  logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  /// extra
  getProducts = () => this.get("product");
  deleteProduct = (_id) => this.delete("product/" + _id);
  updateProduct = (_id, data) => this.put("product/" + _id, data);
}

let userService = new UserService();
export default userService;
