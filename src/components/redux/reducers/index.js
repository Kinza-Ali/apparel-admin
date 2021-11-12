import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { orderReducer } from "./orderReducer";
import { userReducer } from "./userReducer";

// export default combineReducers({ post: postReducer });
const reducer = combineReducers({
  allProducts: productReducer,
  allOrder: orderReducer,
  allUser: userReducer,
});
export default reducer;
