import React, { useEffect, useState } from "react";
import styles from "./HeaderComponent.module.css";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn"))
      setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link to="/" className={styles.link_button}>
          <h2>Threeway Studio</h2>
        </Link>
      </div>
      <div className={styles.menu}>
        {!isLoggedIn ? (
          <Link to="/login" className={styles.link_button}>
            Login
          </Link>
        ) : (
          <Link
            to="/"
            className={styles.link_button}
            onClick={() => {
              localStorage.clear();
              setIsLoggedIn(false);
            }}
          >
            Logout
          </Link>
        )}
        <Link to="/register" className={styles.link_button}>
          Register
        </Link>
      </div>
    </div>
  );
};
