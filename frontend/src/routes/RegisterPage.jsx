import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import styles from "./RegisterPage.module.css";
import { RegisterComponent } from "../components/Register/RegisterComponent";
import { register } from "../apis/api";
// import { login } from "../apis/api";

export const RegisterPage = () => {
  const [userDetails, setUserDetails] = useState({});
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
  const userRegistration = async (formData) => {
    console.log(isValidate(formData));

    if (isValidate(formData)) {
      try {
        const postResponse = await register(formData);
        console.log("registration response-", postResponse);
        if (postResponse) {
          enqueueSnackbar("Registered successfully", {
            variant: "success",
          });
          navigate("/login");
        } else {
          enqueueSnackbar("Sothing went wrong", {
            variant: "error",
          });
        }
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
    } else {
      console.log("somthin wrong");
      enqueueSnackbar(
        "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
        {
          variant: "error",
        }
      );
    }
  };

  return (
    <div className={styles.wrraper}>
      <h1>Welcom to Register Pannel</h1>
      <RegisterComponent
        setUserDetails={setUserDetails}
        userDetails={userDetails}
        userRegistration={userRegistration}
      />
    </div>
  );
};
