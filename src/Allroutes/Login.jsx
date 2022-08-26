import React, { useContext, useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Checkbox
} from "@chakra-ui/react";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("https://reqres.in/api/login", {
        email: formData.email,
        password: formData.password
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "LOGIN_SUCCESS",
          token: res.data.token
        });
        alert("Login succes")
        navigate("/payment");
      })
      .catch((err) => {
        alert("Error");
        console.log("Error", err);
      });
  };
  return (
    <div className={styles.loginmain}>
      <div className={styles.loginform}>
        <div className={styles.loginNav}>
          <div></div>
        </div>
        <div className={styles.form1}>
          <h1>Log In</h1>

          <p>
            Need a Mailchimp account?{" "}
            <Link
              to="/signup"
              style={{ color: "teal", textDecoration: "underline" }}
            >
              Create an account
            </Link>{" "}
          </p>
          <br />
          <FormControl>
            <form onSubmit={handleSubmit}>
            <FormLabel style={{ fontSize: "28px" }}>Email</FormLabel>
            <Input
              type="email"
              height="70px"
              vaue={formData.email}
              name="email"
              onChange={handleChange}
              style={{ border: "1px solid grey" }}
            />
            <br />
            <br />
            <FormLabel style={{ fontSize: "28px" }}>Password</FormLabel>
            <Input
              type="password"
              height="70px"
              value={formData.password}
              name="password"
              onChange={handleChange}
              style={{ border: "1px solid grey" }}
            />
            <br />
            <br />
            <br />
            <Input type="submit" bg="teal" height="60px" color="white" value=" Log In"/>
            </form>
          </FormControl>
          <br/>
          <Checkbox defaultChecked>Keep me Logged in</Checkbox>
          <br/>
          <Link to="#" style={{color:"teal",textDecoration:"underline"}}>Forgot username?</Link>{"    "}<Link to="#"  style={{color:"teal",textDecoration:"underline"}}>Forgot username?</Link>
          <br/>
          <Link to="#"  style={{color:"teal",textDecoration:"underline"}}>Can't Log In?</Link>
        </div>
      </div>
      <div className={styles.loginimage}></div>
    </div>
  );
};

export default Login;
