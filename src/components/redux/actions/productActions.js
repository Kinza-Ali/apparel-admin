import axios from "axios";
import { ActionTypes } from "../constants/actionType";
import productService from "../../../services/ProductService";
// import { urlProducts } from "../../../config/axios";

export const getProductList = () => async (dispatch) => {
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

export const getProductById = (id) => (dispatch) => {
  productService
    .getProductById(id)
    .then((data) => {
      // debugger;
      // console.log(JSON.stringify(data));
      console.log("dispatched");
      dispatch({ type: ActionTypes.GET_PRODUCTS_BY_ID, payload: data });
    })
    .catch((error) => {
      // console.log(error.data.UserMessage);

      dispatch({
        type: ActionTypes.FAILED_GET_PRODUCTS,
        payload: error.data.UserMessage,
      });
    });
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(
      "http://ec2-3-250-68-254.eu-west-1.compute.amazonaws.com:3000/api/product/" +
        id
    );
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
// export const updateProduct = (id, formData) => async (dispatch) => {
//   console.log("Inside Update");

//   const updateRequest = await axios
//     .put("http://localhost:3000/api/product/" + id, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     })
//     .then((res) => {
//       console.log(JSON.stringify(updateRequest));
//       console.log("dispatched");
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//       dispatch({
//         type: ActionTypes.FAILED_GET_PRODUCTS,
//         payload: error,
//       });
//     });
// };

export const addProduct = (formData) => async (dispatch) => {
  console.log("Inside Update");
  console.log(...formData);

  // console.log(productItem);
  const updateRequest = await axios
    .post(
      "http://ec2-3-250-68-254.eu-west-1.compute.amazonaws.com:3000/api/product/",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
    .then((res) => {
      console.log(JSON.stringify(updateRequest));
      console.log("dispatched");
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ActionTypes.FAILED_GET_PRODUCTS,
        payload: error,
      });
    });
};

//// WITHOUT FORM DATA
// export const addProduct = (productItem) => async (dispatch) => {
//   console.log("Inside Update");
//   console.log(productItem);
//   try {

//     productService.addProduct(productItem).then((data) => {
//       console.log(JSON.stringify(data));
//       console.log("dispatched");
//     });
//   } catch (error) {
//     dispatch({
//       type: ActionTypes.FAILED_GET_PRODUCTS,
//       payload: error,
//     });
//   }
// };
