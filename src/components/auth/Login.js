import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import "./Login.css";
import { loginUser } from "../redux/actions/userActions";

function Login() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  // const { email, password } = initialValues;
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values.email, values.password);
    dispatch(loginUser(values.email, values.password));

    // history.push({ pathname: "/home" });
  };
  return (
    <div className="main">
      <div className="container">
        <div className="row ">
          <div className="col-lg-5 ">
            <img
              src="./assets/images/test.jpeg"
              className="img-fluid img"
              alt=""
            />
          </div>
          <div className="col-lg-6  pt-4 loginForm">
            <h1 className="font-weight-bold loginh1  py-3 ">Login</h1>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <div className="form-row loginForm">
                    <div className="col-lg-7">
                      <Field
                        as={TextField}
                        name="email"
                        placeholder="Enter email"
                        type="email"
                        fullWidth
                        required
                        helperText={<ErrorMessage name="email" />}
                        className="my-1 p-4"
                      />
                    </div>
                    <div className="col-lg-7">
                      <Field
                        as={TextField}
                        name="password"
                        placeholder="Enter password"
                        type="password"
                        fullWidth
                        required
                        helperText={
                          <ErrorMessage
                            name="password"
                            style={{ color: "red" }}
                          />
                        }
                        className="my-1 p-4"
                      />
                    </div>
                    <div className="col-lg-7">
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        disabled={props.isSubmitting}
                        fullWidth
                        className="btn"
                      >
                        {props.isSubmitting ? "Loading" : "Sign in"}
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
