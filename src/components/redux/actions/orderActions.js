import orderService from "../../../services/OrderService";
import axios from "axios";

import { ActionTypes } from "../constants/actionType";

export const getOrders = () => async (dispatch) => {
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

export const getProductById = (id) => async (dispatch) => {
  try {
    orderService.getOrderById(id).then((data) => {
      dispatch({ type: ActionTypes.GET_ORDER_BY_ID, payload: data });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_Order,
      payload: error,
    });
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    console.log("Inside delete Order");
    orderService.deleteOrder(id).then(() => {
      console.log("before dispatch");
      dispatch({ type: ActionTypes.REMOVE_ORDER });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_Order,
      payload: error,
    });
  }
};
