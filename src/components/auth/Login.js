import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
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
    <div className="mainContainer">
      <div className="subContainer">
        <div className="minidiv">
          <div className="imageDiv imgContainer">
            <img src="./assets/test1.jpeg" className="imageTag" alt="" />
          </div>
          <div className="contentDiv">
            <div className="formBox">
              <h1 className="font-weight-bold loginH1Tag  py-3 ">Login</h1>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(props) => (
                  <Form>
                    <div className="inputDiv">
                      <Field
                        as={TextField}
                        name="email"
                        placeholder="Enter email"
                        type="email"
                        fullWidth
                        required
                        helperText={<ErrorMessage name="email" />}
                        className=" inputField"
                      />
                    </div>
                    <div className="inputDiv">
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
                        className="inputField"
                      />
                    </div>
                    <div className="inputDiv">
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        disabled={props.isSubmitting}
                        fullWidth
                        className="submitBtn"
                      >
                        {props.isSubmitting ? "Loading" : "Sign in"}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
