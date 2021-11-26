import orderService from "../../../services/OrderService";

import { ActionTypes } from "../constants/actionType";

export const getOrders = () => async (dispatch) => {
  try {
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

export const getOrderDtaById = (id) => async (dispatch) => {
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
    orderService.deleteOrder(id);
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_Order,
      payload: error,
    });
  }
};

export const addOrder = (orderList) => async (dispatch) => {
  orderService
    .postOrder(orderList)
    .then((data) => {
      console.log(JSON.stringify(data));
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.FAILED_Order,
        payload: error,
      });
      console.log(error);
    });
};

export const updateOrder = (id, data) => async (dispatch) => {
  try {
    orderService.putOrder(id, { deliveryDate: data }).then((data) => {
      console.log(JSON.stringify(data));
      console.log("dispatched");
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_Order,
      payload: error,
    });
  }
};
