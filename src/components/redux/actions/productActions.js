import axios from "axios";
import { ActionTypes } from "../constants/actionType";
import productService from "../../../services/ProductService";
// import { urlProducts } from "../../../config/axios";

export const getProducts = () => async (dispatch) => {
  try {
    console.log("calling...");
    //get request
    productService.getProducts().then((data) => {
      dispatch({ type: ActionTypes.GET_PRODUCTS, payload: data });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    productService.getProductById(id).then((data) => {
      dispatch({ type: ActionTypes.GET_PRODUCTS_BY_ID, payload: data });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: JSON.parse(error.request.response).UserMessage,
    });

    if (error.request) {
      console.log(JSON.parse(error.request.response).UserMessage);
      console.log("true");
    }
    if (error.response) {
      console.log("response");
      console.log(error.response.response);
    }
    return JSON.parse(error.request.response).UserMessage;
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete("http://localhost:3000/api/product/" + id);
    dispatch({ type: ActionTypes.REMOVE_SELECTED_PRODUCT });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};

export const updateProduct = (id, productItem) => async (dispatch) => {
  console.log("Inside Update");
  try {
    productService.putProduct(id, productItem).then((data) => {
      console.log("dispatched");
      console.log(JSON.stringify(data));
    });
    console.log("dispatched");
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
    console.log(error.response);
  }
};

export const addProduct = (productItem) => async (dispatch) => {
  console.log("Inside Update");
  console.log(productItem);
  try {
    // console.log(productItem);
    // const updateRequest = await axios
    //   .post("http://localhost:3000/api/product/", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    productService.addProduct(productItem).then((data) => {
      console.log(JSON.stringify(data));
      console.log("dispatched");
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};
