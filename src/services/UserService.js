import Services from "./Services";
import jwtDecode from "jwt-decode";
class UserService extends Services {
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

  register = (data) =>
    new Promise((resolve, reject) => {
      // debugger;
      this.post("user/register", data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          // debugger;
          console.log(err);
          reject(err.data.UserMessage);
        });
    });

  logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      // console.log(jwt);
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      // console.log(this.getLoggedInUser());
      if (this.getLoggedInUser().role === 1) return true;
      else return false;
    } else return false;
  };
  isUser = () => {
    if (this.isLoggedIn()) {
      // console.log(this.getLoggedInUser());
      if (this.getLoggedInUser().role === 2) return true;
      else return false;
    } else return false;
  };

  getUsers = () => this.get("user");
  getUserById = (_id) => this.get("user/" + _id);
  deleteUser = (_id) => this.delete("user/" + _id);
  updateUser = (_id, data) => this.put("user/" + _id, data);
}

let userService = new UserService();
export default userService;
