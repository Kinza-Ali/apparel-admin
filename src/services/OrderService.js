import Services from "./Services";

class OrderService extends Services {
  getOrder = () => this.get("order");

  getOrderById = (_id) => this.get("order/" + _id);

  postOrder = (data) =>
    new Promise((resolve, reject) => {
      this.post("order", data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.log(err.data.UserMessage);
          reject(err.data.UserMessage);
        });
    });

  deleteOrder = (_id) => this.delete("order/" + _id);

  putOrder = (_id, data) => this.put("order/" + _id, data);
}

let orderService = new OrderService();
export default orderService;
