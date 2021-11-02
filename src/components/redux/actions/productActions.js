import { ActionTypes } from "../constants/actionType";
import axios from "axios";
// import { urlProducts } from "../../../config/axios";

export const getProducts = () => async (dispatch) => {
  try {
    console.log("calling...");
    const { data } = await axios.get("http://localhost:3000/api/product");
    dispatch({ type: ActionTypes.GET_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/product/" + id);
    // console.log(data.data);
    dispatch({ type: ActionTypes.GET_PRODUCTS_BY_ID, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
