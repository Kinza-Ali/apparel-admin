import Services from "./Services";
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

  register = (data) => this.post("user/register", data);

  logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  getUsers = () => this.get("user");
  getUserById = (_id) => this.get("user/" + _id);
  deleteUser = (_id) => this.delete("user/" + _id);
  updateUser = (_id, data) => this.put("user/" + _id, data);
}

let userService = new UserService();
export default userService;
