import React from "react";
import styles from "./HeaderComponent.module.css";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link to="/" className={styles.link_button}>
          <h2>Threeway Studio</h2>
        </Link>
      </div>
      <div className={styles.menu}>
        <Link to="/login" className={styles.link_button}>
          Login
        </Link>
        <Link to="/register" className={styles.link_button}>
          Register
        </Link>
      </div>
    </div>
  );
};
