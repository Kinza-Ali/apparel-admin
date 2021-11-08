import { ActionTypes } from "../constants/actionType";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.GET_PRODUCTS_BY_ID:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const getProductIdReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS_BY_ID:
      return { ...state, products: payload };
    // case ActionTypes.UPDATE_PRODUCT:
    //   return { ...state, products: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
