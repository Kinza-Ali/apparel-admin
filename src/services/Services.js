import axios from "axios";
import { getOrders } from "../components/redux/actions/orderActions";

axios.defaults.baseURL = "http://localhost:3000/api/";

class Services {
  // constructor() {}

  get = (url) =>
    new Promise((resolve, reject) => {
      console.log("inside oServices");
      console.log("url get method" + url);
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          if (error.request) console.log(error.request.response);
          if (error.response) console.log(error.response.response);
          reject(error);
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
          reject(error);
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
      console.log("Url " + url);
      axios
        .delete(url)
        .then((res) => {
          alert("Successfully delted");
        })
        .catch((error) => {
          // if (error.request)
          console.log(error.request.response);
          // if (error.response)
          console.log(error.response.response);
          reject(error);
        });
    });
}

export default Services;
