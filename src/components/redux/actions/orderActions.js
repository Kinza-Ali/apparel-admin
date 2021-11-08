import orderService from "../../../services/OrderService";

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
    orderService.deleteOrder(id).then((data) => {
      console.log(JSON.stringify(data));
      dispatch({ type: ActionTypes.REMOVE_ORDER });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_Order,
      payload: error,
    });
  }
};

export const addOrder = (orderList) => async (dispatch) => {
  console.log("Inside Add Product");
  console.log(orderList);
  try {
    // console.log(productItem);
    orderService.postOrder(orderList).then((data) => {
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

export const updateOrder = (id, data) => async (dispatch) => {
  console.log("Inside Update");
  console.log(data);

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
