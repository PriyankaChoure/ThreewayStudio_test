import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { StyledEngineProvider } from "@mui/system";
import { HeaderComponent } from "./components/Header/HeaderComponent";

export const App = () => {
  const [userDetail, setUserDetail] = useState({});
  return (
    <StyledEngineProvider injectFirst>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
        <div>
          <HeaderComponent />
          <Outlet
            context={{
              outletContextData: {
                userDetail,
                setUserDetail,
              },
            }}
          />
        </div>
      </SnackbarProvider>
    </StyledEngineProvider>
  );
};
