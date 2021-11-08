import { ActionTypes } from "../constants/actionType";
const initialState = {
  order: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_Order:
      return { ...state, order: payload };
    case ActionTypes.GET_ORDER_BY_ID:
      return { ...state, products: payload };
    case ActionTypes.REMOVE_ORDER:
      return {};
    default:
      return state;
  }
};
