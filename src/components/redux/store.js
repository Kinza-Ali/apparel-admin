import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Rootreducer from "./reducers/index";
const middleware = [thunk];

const store = createStore(
  Rootreducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
