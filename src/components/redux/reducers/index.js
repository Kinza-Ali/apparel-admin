import { combineReducers } from "redux";
import { productReducer, getProductIdReducer } from "./productReducer";
import { orderReducer } from "./orderReducer";

// export default combineReducers({ post: postReducer });
const reducer = combineReducers({
  allProducts: productReducer,
  getProductById: getProductIdReducer,
  allOrder: orderReducer,
});
export default reducer;
