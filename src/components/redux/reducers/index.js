import { combineReducers } from "redux";
import { productReducer, getProductIdReducer } from "./productReducer";

// export default combineReducers({ post: postReducer });
const reducer = combineReducers({
  allProducts: productReducer,
  getProductById: getProductIdReducer,
});
export default reducer;
