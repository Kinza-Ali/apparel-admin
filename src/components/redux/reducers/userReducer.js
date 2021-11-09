import { ActionTypes } from "../constants/actionType";
const initialState = {
  user: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, user: payload };
    case ActionTypes.GET_USER:
      return { ...state, user: payload };
    case ActionTypes.GET_USER_BY_ID:
      return { ...state, user: payload };
    case ActionTypes.REMOVE_USER:
      return {};
    default:
      return state;
  }
};
