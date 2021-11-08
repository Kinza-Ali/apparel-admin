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

export const updateProduct = (id, formData) => async (dispatch) => {
  console.log("Inside Update");
  try {
    // const { productName, productType, price, quantity, image } = productItem;
    console.log(...formData);
    const updateRequest = await axios.put(
      "http://localhost:3000/api/product/" + id,
      { headers: { "Content-Type": "multipart/form-data" } },
      formData
    );
    console.log(JSON.stringify(updateRequest));
    // dispatch({ type: ActionTypes.UPDATE_PRODUCT, payload: productItem });
    console.log("dispatched");
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};

export const addProduct = (formData) => async (dispatch) => {
  console.log("Inside Update");
  console.log(...formData);
  try {
    // console.log(productItem);
    const updateRequest = await axios
      .post("http://localhost:3000/api/product/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(JSON.stringify(updateRequest));
        console.log("dispatched");
      });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};
