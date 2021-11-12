import Services from "./Services";

class ProductService extends Services {
  // constructor() {
  //   super();
  // }
  getProducts = () => this.get("product");
  getProductById = (_id) => this.get("product/" + _id);
  addProduct = (data) => this.post("product", data);
  deleteProduct = (_id) => this.delete("product/" + _id);
  putProduct = (_id, data) => this.put("product/" + _id, data);
}

let productService = new ProductService();
export default productService;
