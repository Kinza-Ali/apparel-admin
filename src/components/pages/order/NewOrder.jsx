import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import "./NewOrder.css";
import { addOrder } from "../../redux/actions/orderActions";
import { getProductById } from "../../redux/actions/productActions";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";

function NewOrder() {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    customerId: "",
    deliveryDate: "",
    itemList: [{ productId: "", quantity: "" }],
  };

  // let productIdError = "";
  // productIdError = useSelector((state) => state.allProducts.error);
  // const [deliveryDate, setDeliveryDate] = useState();
  // const [customerId, setCustomerId] = useState();
  // // const [itemList, setItemList] = useState([{ productId: "", quantity: "" }]);
  // const [errorMessage, setErrorMessage] = useState([
  //   { errorProductId: "required", errorQuantity: "required" },
  // ]);
  // const [dateError, setDateError] = useState();
  // const order = [
  //   {
  //     label: "Customer Id",
  //     type: "text",
  //     placeholder: 34454,
  //   },
  //   {
  //     label: "Delivery Date",
  //     type: "text",
  //     placeholder: "2021-03-03",
  //   },
  // ];

  // // handle click event of the Add button

  // const handleInput = (e, label) => {
  //   if (label === "Customer Id") {
  //     setCustomerId(e.target.value);
  //   } else if (label === "Delivery Date") {
  //     setDeliveryDate(e.target.value);
  //   }
  // };

  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...itemList];
  //   list[index][name] = value;
  //   setItemList(list);
  // };

  // // handle click event of the Remove button
  // const handleRemoveClick = (index) => {
  //   const list = [...itemList];
  //   list.splice(index, 1);
  //   setItemList(list);
  // };

  // const renderInputComponent = (order) => {
  //   return (
  //     <input
  //       type={order.type}
  //       placeholder={order.placeholder}
  //       onChange={(e) => handleInput(e, order.label)}
  //     />
  //   );
  // }

  // const handleAddClick = (e, index) => {
  //   e.preventDefault();

  //   // dispatch(getProductById(itemList[index].productId));

  //   console.log("Starting again " + " index is : " + index);
  //   let errorMsg = [];
  //   let error = {};
  //   let valid = true;
  //   console.log(itemList[index].productId);
  //   if (itemList[index].productId) {
  //     console.log("indside: " + itemList[index].productId);
  //     dispatch(getProductById(itemList[index].productId));
  //     console.log(productIdError);
  //     if (productIdError) {
  //       console.log("inner if");
  //       error.errorProductId = "Enter a valid product Id";
  //       console.log(error.errorProductId + " checking if the value is set");
  //       valid = false;
  //     } else {
  //       console.log("valid product");
  //       error.errorProductId = "";
  //     }
  //   } else if (!itemList[index].productId) {
  //     console.log("no product id");
  //     error.errorProductId = "Enter Product Id";
  //     valid = false;
  //   } else {
  //     console.log("in else prod id");
  //     error.errorProductId = "";
  //   }
  //   if (!itemList[index].quantity) {
  //     console.log("Quantity is empty");
  //     error.errorQuantity = "Quantity is required";
  //     valid = false;
  //   } else if (itemList[index].quantity < 1) {
  //     console.log("quantity is less than 1");
  //     error.errorQuantity = "Quantity must be greater than 0";
  //     valid = false;
  //   } else {
  //     error.errorQuantity = " ";
  //   }
  //   if (valid) {
  //     setItemList([...itemList, { productId: "", quantity: "" }]);
  //   }

  //   errorMsg = error;

  //   if (index === 0) {
  //     setErrorMessage([errorMsg]);
  //   } else {
  //     setErrorMessage([...errorMessage, errorMsg]);
  //   }

  //   console.log(JSON.stringify(errorMsg));
  //   console.log(JSON.stringify(errorMessage));
  // };

  // const handleAddOrder = () => {
  //   let dateRegx = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  //   let dateValidation = dateRegx.test(deliveryDate);
  //   console.log(dateValidation);
  //   if (!dateValidation) {
  //     setDateError("Enter date in YYYY-MM-DD format");
  //   } else {
  //     const orderList = {
  //       item: itemList,
  //       customerId,
  //       deliveryDate,
  //     };
  //     dispatch(addOrder(orderList));
  //     history.push({ pathname: "/orders" });
  //   }
  // };
  //Formik

  const validationSchema = Yup.object().shape({
    customerId: Yup.string().required("Required"),
    deliveryDate: Yup.date().required("Required"),
    itemList: Yup.array().of(
      Yup.object().shape({
        productId: Yup.string().min(4, "too short").required("Required"), // these constraints take precedence
        quantity: Yup.string()
          .min(1, "Must be greater than 0")
          .required("Required"), // these constraints take precedence
      })
    ),
    //where to add custom validations

    // .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
    // .min(3, 'Minimum of 3 friends'),
  });
  const onSubmit = (values, props) => {
    // console.log(values.email, values.password);
    // dispatch(loginUser(values.email, values.password));
    console.log(values);
    // dispatch(addOrder(values));
    //     history.push({ pathname: "/orders" });
  };
  return (
    <div className="newOrder">
      <h1 className="addOrderTitle">New Order</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <div>
              <FieldArray
                name="itemList"
                render={(arrayHelpers) => (
                  <div>
                    {initialValues.itemList.map((item, index) => (
                      <div key={index}>
                        {/** both these conventions do the same */}
                        <Field name={`itemList[${index}].productId`} />
                        <Field name={`itemList.${index}.quantity`} />

                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({ productId: "", quantity: "" })
                      }
                    >
                      +
                    </button>
                  </div>
                )}
              />
              <div>
                <Field
                  as={TextField}
                  name="customerId"
                  placeholder="Enter customer id"
                  type="text"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="customerId" />}
                  className="my-1 p-4"
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  name="deliveryDate"
                  placeholder="Enter date"
                  type="text"
                  fullWidth
                  required
                  helperText={
                    <ErrorMessage
                      name="deliveryDate"
                      style={{ color: "red" }}
                    />
                  }
                  className="my-1 p-4"
                />
              </div>
              <div>
                <button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  fullWidth
                  className="btn"
                >
                  {props.isSubmitting ? "Loading" : "Add Order"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewOrder;
