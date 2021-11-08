import { ActionTypes } from "../constants/actionType";
const initialState = {
  order: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_Order:
      return { ...state, order: payload };

    default:
      return state;
  }
};
