import React from "react";
import styles from "../../styles/loadingContainer.module.css";

const LoadingContainer = () => {
  return (
    <div className={styles.loadingContainer__loadingScreen}>
      <div>
        <img src="/images/linkedin_withText.png" alt="Linkedin logo" />
        <div className={styles.loadingContainer__load_bar}></div>
      </div>
    </div>
  );
};

export default LoadingContainer;
