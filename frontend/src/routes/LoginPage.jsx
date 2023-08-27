import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate, useOutletContext } from "react-router-dom";

import styles from "./LoginPage.module.css";
import { LoginComponent } from "../components/Login/LoginComponent";
import { login } from "../apis/api";

export const LoginPage = () => {
  const { outletContextData } = useOutletContext();
  const setUserDetail = outletContextData.setUserDetail;

  const [userCredentials, setUserCredential] = useState({});
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const isValidate = (userData) => {
    console.log(userData);
    if (!isEmail(userData.email)) {
      enqueueSnackbar("Not a valid email", { variant: "warning" });
      return false;
    }
    if (!userData.password) {
      enqueueSnackbar("Password can not be empty", { variant: "warning" });
      return false;
    }
    if (userData.password.length !== 6) {
      enqueueSnackbar("Password must be more than 6 character", {
        variant: "warning",
      });
      return false;
    }
    return true;
  };
  const userLogin = async (userData) => {
    if (!isValidate(userCredentials)) return;
    try {
      const responseData = await login(userData);
      console.log(responseData.data);
      enqueueSnackbar("Logged in successfully", {
        variant: "success",
      });
      persistLogin(
        responseData.data.token,
        responseData.data.user.email,
        responseData.data.user.usertype
      );
      setUserDetail({
        username: responseData.data.user.username,
        id: responseData.data.user._id,
        address: responseData.data.user.address,
        userType: responseData.data.user.usertype,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response) {
        if (err.response.status === 400)
          enqueueSnackbar(err.response.data.message, {
            variant: "error",
          });
        else
          enqueueSnackbar(err.response.data, {
            variant: "error",
          });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          {
            variant: "error",
          }
        );
      }
    }
  };
  const persistLogin = (token, email, usertype) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("userType", usertype);
    localStorage.setItem("isLoggedIn", true);
  };
  return (
    <div className={styles.wrraper}>
      <h1>Welcom to Login Pannel</h1>
      <LoginComponent
        setUserCredential={setUserCredential}
        userCredentials={userCredentials}
        userLogin={userLogin}
      />
    </div>
  );
};
