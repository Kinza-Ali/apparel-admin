import Services from "./Services";

class OrderService extends Services {
  // constructor() {
  //   super();
  // }
  getOrder = () => this.get("order");
  getOrderById = (_id) => this.get("order/" + _id);
  postOrder = (data) => this.post("order", data);
  deleteOrder = (_id) => this.delete("order/" + _id);
  putOrder = (_id, data) => this.put("order/" + _id, data);
}

let orderService = new OrderService();
export default orderService;
