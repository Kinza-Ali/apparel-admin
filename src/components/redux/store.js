import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
const middleware = [thunk];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
