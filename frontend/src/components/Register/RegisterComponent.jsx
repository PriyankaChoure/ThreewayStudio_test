import React from "react";
import { Box } from "@mui/system";
import { Button, MenuItem, Stack, TextField } from "@mui/material";

import styles from "./RegisterComponent.module.css";
import { Link } from "react-router-dom";

export const RegisterComponent = ({
  userDetails,
  setUserDetails,
  userRegistration,
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
          <h2 className={styles.title}>Register</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter User Name"
            fullWidth
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                username: e.target.value,
              })
            }
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            title="Email"
            name="email"
            placeholder="Enter Email"
            fullWidth
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
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
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              })
            }
          />
          <TextField
            id="contact"
            label="contact"
            variant="outlined"
            title="Contact"
            name="contact"
            placeholder="Enter contact"
            fullWidth
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                contact: e.target.value,
              })
            }
          />
          <TextField
            id="usertype"
            select
            label="user_type"
            helperText="Please select user category"
            fullWidth
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                usertype: e.target.value,
              })
            }
          >
            <MenuItem value={"manufacturer"}>Manufacturer</MenuItem>
            <MenuItem value={"transporter"}>Transporter</MenuItem>
          </TextField>
          <TextField
            id="address"
            label="address"
            multiline
            maxRows={4}
            variant="outlined"
            title="address"
            name="address"
            placeholder="Enter Address"
            fullWidth
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                address: e.target.value,
              })
            }
          />
          <Button
            className={styles.button}
            variant="contained"
            onClick={() => {
              userRegistration(userDetails);
            }}
          >
            Register
          </Button>
          <p className={styles.secondary_action}>
            Already have an account ..
            <Link to="/login">Login here</Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
};
