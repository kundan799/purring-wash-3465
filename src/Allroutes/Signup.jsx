import React from "react";
import styles from "./signup.module.css";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <div className={styles.Signupmain}>
      <div className={styles.signup}>
        <div className={styles.nav}>
          <div></div>
        </div>
        <div className={styles.form}>
          <h1>Sign up for Mailchimp</h1>
          <p>
            Create a free account or{"  "}
            <Link to="/login" style={{ color: "teal" }}>
              log in
            </Link>
          </p>
          <br />
          <br />
          <FormControl>
            <FormLabel style={{ fontSize: "28px" }}>Email</FormLabel>
            <Input
              type="email"
              height="70px"
              style={{ border: "1px solid grey" }}
            />
            <br />
            <br />
            <FormLabel style={{ fontSize: "28px" }}>Username</FormLabel>
            <Input
              type="email"
              height="70px"
              style={{ border: "1px solid grey" }}
            />
            <br />
            <br />
            <FormLabel style={{ fontSize: "28px" }}>Password</FormLabel>
            <Input
              type="email"
              height="70px"
              style={{ border: "1px solid grey" }}
            />
            <br />
            <br />
            <Checkbox
              style={{ marginRight: "650px" }}
              defaultChecked
            ></Checkbox>
            <p>
              I don't want to receive emails about Mailchimp and related Intuit
              product and <br />
              feature updates, marketing best practices, and promotions from
              Mailchimp.{" "}
            </p>
            <br />
            <br />
            <p>
              By creating an account, you agree to our
              <Link
                to="#"
                style={{ color: "teal", textDecoration: "underline" }}
              >
                Terms
              </Link>{" "}
              and have read and acknowledge the
              <Link
                to="#"
                style={{ color: "teal", textDecoration: "underline" }}
              >
                Global Privacy Statement
              </Link>{" "}
              .
            </p>
            <br />
            <Button
              colorScheme="teal"
              bg="#007c89"
              width="200px"
              height="70px"
              variant="solid"
              style={{marginRight:"550px"}}
            >
              Sign Up
            </Button>
            <br/>
            <br/>
            <p>
              Invisible reCAPTCHA by Google
              <Link
                to="#"
                style={{ color: "teal", textDecoration: "underline" }}
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                to="#"
                style={{ color: "teal", textDecoration: "underline" }}
              >
                Terms of Use
              </Link>
              .
            </p>
          </FormControl>
        </div>
      </div>
      <div className={styles.sign2}></div>
    </div>
  );
};
//<div class="c-billboard__image" style="background-image: url(https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg)"></div>
export default Signup;
