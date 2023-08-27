import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components/Header/HeaderComponent";
import io from "socket.io-client";
import { ManufacturerComponent } from "../components/Manufacturer/ManufacturerComponent";
import { TranspoterComponent } from "../components/Transpoter/TranspoterComponent";
import { useOutletContext } from "react-router-dom";

export const HomePage = () => {
  const { outletContextData } = useOutletContext();
  const userDetail = outletContextData.userDetail;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [socket, setSocket] = useState("");
  const [userType, setUserType] = useState("");
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(localStorage.getItem("isLoggedIn"));
      setSocket(io.connect("http://localhost:8082"));
      setUserType(localStorage.getItem("userType").toString());
    }
  }, []);
  return (
    <div>
      {userType === "manufacturer" ? (
        <ManufacturerComponent userDetail={userDetail} />
      ) : (
        <TranspoterComponent />
      )}
    </div>
  );
};
