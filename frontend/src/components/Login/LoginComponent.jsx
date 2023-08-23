import React from "react";
import { Box } from "@mui/system";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";

import styles from "./LoginComponent.module.css";
import { Link } from "react-router-dom";

export const LoginComponent = ({
  setUserCredential,
  userCredentials,
  userLogin,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Box className={styles.content}>
        <Stack spacing={2} className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            title="Email"
            name="email"
            placeholder="Enter Email"
            fullWidth
            onChange={(e) =>
              setUserCredential({
                ...userCredentials,
                email: e.target.value,
              })
            }
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            fullWidth
            placeholder="Enter Password with minimum 6 characters"
            onChange={(e) =>
              setUserCredential({
                ...userCredentials,
                password: e.target.value,
              })
            }
          />
          <Button
            className={styles.button}
            variant="contained"
            onClick={() => {
              userLogin(userCredentials);
            }}
          >
            Login
          </Button>
          <p className={styles.secondary_action}>
            Don't have an account?
            <Link to="/register">Register Here</Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
};
