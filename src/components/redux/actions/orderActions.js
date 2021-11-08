import orderService from "../../../services/OrderService";
import axios from "axios";

import { ActionTypes } from "../constants/actionType";

export const getOrder = () => async (dispatch) => {
  try {
    console.log("calling...");
    //get request
    orderService.getOrder().then((data) => {
      dispatch({ type: ActionTypes.GET_Order, payload: data });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_Order,
      payload: error,
    });
  }
};
