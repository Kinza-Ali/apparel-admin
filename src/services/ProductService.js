import Services from "./Services";

class ProductService extends Services {
  constructor() {
    super();
  }
  getProducts = () => this.get("product");
  addProduct = (data) => this.post("product", data);
  deleteProduct = (_id) => this.delete("product/" + _id);
  updateProduct = (_id, data) => this.put("product/" + _id, data);
}

let productService = new ProductService();
export default productService;
