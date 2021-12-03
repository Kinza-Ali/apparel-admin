import axios from "axios";

// axios.defaults.baseURL =
//   "http://ec2-54-76-194-87.eu-west-1.compute.amazonaws.com:3000/api/";
axios.defaults.baseURL = "https://apparel-backend.herokuapp.com/api/";
// axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
class Services {
  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });

  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });

  put = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });

  delete = (url) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          console.log("Successfully deleted");
          resolve(res);
        })
        .catch((error) => {
          console.log(error.request.response);
          console.log(error.response.response);
          reject(error);
        });
    });
}

export default Services;
