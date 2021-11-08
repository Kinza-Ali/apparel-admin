import Services from "./Services";

class OrderService extends Services {
  // constructor() {
  //   super();
  // }
  getOrder = () => this.get("order");
  addOrder = (data) => this.post("order", data);
  deleteOrder = (_id) => this.delete("order/" + _id);
  updateOrder = (_id, data) => this.put("order/" + _id, data);
}

let orderService = new OrderService();
export default orderService;
