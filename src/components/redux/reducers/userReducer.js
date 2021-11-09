import { ActionTypes } from "../constants/actionType";
const initialState = {
  user: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, user: payload };
    // case ActionTypes.GET_ORDER_BY_ID:
    //   return { ...state, products: payload };
    // case ActionTypes.REMOVE_ORDER:
    //   return {};
    default:
      return state;
  }
};
