import { ActionTypes } from "../constants/actionType";
const initialState = {
  products: [],
  selectedProduct: {},
  error: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, products: payload, error: initialState.error };
    case ActionTypes.GET_PRODUCTS_BY_ID:
      return { ...state, selectedProduct: payload, error: initialState.error };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    case ActionTypes.FAILED_GET_PRODUCTS:
      return { ...state, error: payload };
    default:
      return state;
  }
};
