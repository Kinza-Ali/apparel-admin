import userService from "../../../services/UserService";
import { ActionTypes } from "../constants/actionType";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    // console.log(productItem);
    userService
      .login(email, password)
      .then((data) => {
        console.log(JSON.stringify(data) + "data");

        dispatch({ type: ActionTypes.LOGIN_USER, payload: data.token });
        window.location.href = "/";
        console.log("dispatched");
      })
      .catch((error) => {
        console.log("error from catch" + error);
      });
  } catch (error) {
    console.log("error from trycatch" + error);
    dispatch({
      type: ActionTypes.FAILED_USER,
      payload: error,
    });
  }
};

export const getUserList = () => async (dispatch) => {
  try {
    console.log("calling user action...");
    userService.getUsers().then((data) => {
      dispatch({ type: ActionTypes.GET_USER, payload: data });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_USER,
      payload: error,
    });
  }
};

export const getUserDataById = (id) => async (dispatch) => {
  try {
    userService.getUserById(id).then((data) => {
      console.log(data);
      dispatch({ type: ActionTypes.GET_USER_BY_ID, payload: data });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_USER,
      payload: error,
    });
    if (error.request) {
      console.log(JSON.parse(error.request.response).UserMessage);
      console.log("true");
    }
    if (error.response) {
      console.log("response");
      console.log(error.response.response);
    }
    // return JSON.pars;
  }
};

export const addUserData = (data) => (dispatch) => {
  console.log("Inside Add User Data method");
  // console.log(data);

  userService
    .register(data)
    .then((data) => {
      // debugger;
      console.log(JSON.stringify(data));
      console.log("dispatched");
      dispatch({ type: ActionTypes.ADD_USER, payload: data });
      alert("User successfully Added");
    })
    .catch((error) => {
      // debugger;
      dispatch({
        type: ActionTypes.FAILED_USER,
        payload: error,
      });
      console.log(error);
    });

  // dispatch({
  //   type: ActionTypes.FAILED_USER,
  //   payload: JSON.parse(error.request.response).UserMessage,
  // });
  // if (error.request)
  //   console.log(JSON.parse(error.request.response).UserMessage);
  // if (error.response) console.log(error.response.response);
  // console.log(error);
  // return JSON.parse(error.request.response).UserMessage;
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    console.log("Inside delete Order");
    userService.deleteUser(id);
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_USER,
      payload: error,
    });
  }
};

export const updateUserData = (id, data) => async (dispatch) => {
  console.log("Inside Update");
  console.log(data);

  try {
    userService
      .updateUser(id, {
        name: data.name,
        contact: data.contact,
        role: data.role,
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        console.log("dispatched");
      });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_USER,
      payload: error,
    });
  }
};
