import React, { useState } from "react";
import styles from "./ManufacturerComponent.module.css";
import { Button, MenuItem, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { getTransporterList } from "../../apis/api";

export const ManufacturerComponent = ({ userDetail }) => {
  const [isSendMessage, setIsSendMessage] = useState(false);
  const [isJoinMeet, setIsJoinMeet] = useState(false);
  const [message, setMessage] = useState({});
  const [transporterList, settransporterList] = useState([]);

  const handleClick = async () => {
    let uniqueCode = Math.random().toString(36).slice(2);
    setMessage({
      ...message,
      orderid: uniqueCode,
      pickup: userDetail.address,
    });
    const transporters = await getTransporterList();
    settransporterList(transporters);

    setIsSendMessage(true);
  };
  return (
    <div className={styles.container}>
      <h3>Welcome {localStorage.getItem("email").toString()}</h3>
      <div className={styles.option_container}>
        <Button
          className={styles.button}
          variant="contained"
          onClick={handleClick}
        >
          Send Message
        </Button>
        <Button
          className={styles.button}
          variant="contained"
          onClick={() => {
            setIsJoinMeet(true);
          }}
        >
          Join Meeting
        </Button>
      </div>
      <div className={styles.input_container}>
        {isSendMessage && (
          <div>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              minHeight="100vh"
            >
              <Box className={styles.content}>
                <Stack spacing={2} className={styles.form}>
                  <h2 className={styles.title}>Message</h2>
                  <TextField
                    id="orderid"
                    disabled
                    label="orderid"
                    variant="outlined"
                    title="orderid"
                    name="orderid"
                    value={message.orderid}
                    fullWidth
                  />
                  <TextField
                    id="from"
                    label="From"
                    multiline
                    variant="outlined"
                    title="from"
                    name="from"
                    placeholder="Enter address where to pickup"
                    fullWidth
                    onChange={(e) =>
                      setMessage({
                        ...message,
                        from: e.target.value,
                      })
                    }
                  />
                  <TextField
                    id="to"
                    variant="outlined"
                    multiline
                    label="To"
                    name="to"
                    type="to"
                    fullWidth
                    placeholder="Enter address where to deliver"
                    onChange={(e) =>
                      setMessage({
                        ...message,
                        to: e.target.value,
                      })
                    }
                  />

                  <TextField
                    id="quantity"
                    select
                    label="quantity"
                    helperText="Please select quantity"
                    fullWidth
                    onChange={(e) =>
                      setMessage({
                        ...message,
                        quantity: e.target.value,
                      })
                    }
                  >
                    <MenuItem value={"1 ton"}>1 Ton</MenuItem>
                    <MenuItem value={"2 ton"}>2 Ton</MenuItem>
                    <MenuItem value={"3 ton"}>3 Ton</MenuItem>
                  </TextField>
                  <TextField
                    id="pickup"
                    label="pickup"
                    multiline
                    disabled
                    variant="outlined"
                    title="pickup"
                    name="pickup"
                    value={message.pickup}
                    fullWidth
                    onChange={(e) =>
                      setMessage({
                        ...message,
                        pickup: e.target.value,
                      })
                    }
                  />
                  <TextField
                    id="transporter"
                    select
                    label="Transporter"
                    helperText="Please select transporter"
                    fullWidth
                    onChange={(e) =>
                      setMessage({
                        ...message,
                        transporter: e.target.value,
                      })
                    }
                  >
                    {transporterList &&
                      transporterList.map((transporter) => (
                        <MenuItem value={transporter}>transporter</MenuItem>
                      ))}
                  </TextField>

                  <Button
                    className={styles.button}
                    variant="contained"
                    onClick={() => {}}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </Box>
          </div>
        )}
        {isJoinMeet && <div>join Meet</div>}
      </div>
    </div>
  );
};
