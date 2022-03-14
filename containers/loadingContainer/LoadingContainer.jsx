import React from "react";
import Image from "next/image";
import styles from "../../styles/loadingContainer.module.css";

const LoadingContainer = () => {
  return (
    <div className={styles.loadingContainer__loadingScreen}>
      <div>
        <Image
          width={120}
          height={30}
          src="/images/linkedin_withText.png"
          alt="Linkedin logo"
          layout="responsive"
        />
        <div className={styles.loadingContainer__load_bar}></div>
      </div>
    </div>
  );
};

export default LoadingContainer;
