import axios from "axios";
import { ActionTypes } from "../constants/actionType";
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

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const deleteRequest = await axios.delete(
      "http://localhost:3000/api/product/" + id
    );
    dispatch({ type: ActionTypes.REMOVE_SELECTED_PRODUCT });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};
export const updateProduct = (id, productItem) => async (dispatch) => {
  try {
    const updateRequest = await axios.put(
      "http://localhost:3000/api/product/" + id,
      productItem
    );
    dispatch({ type: ActionTypes.UPDATE_PRODUCT });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};
