import React from "react";
import styles from "../../styles/bodyContainer.module.css";

const BodyContainer = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 2) {
    return (
      <div className={[styles.bodyContainer, "section-padding"].join(" ")}>
        <div className={styles.bodyContainer__side_left}>
          {childrenArray[0]}
        </div>{" "}
        <div className={styles.bodyContainer__main}>{childrenArray[1]}</div>
        <div className={styles.bodyContainer__side_right}>
          {childrenArray[2]}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.bodyContainer}>
        <div className={styles.bodyContainer__section_left}>
          {childrenArray[0]}
        </div>
        <div className={styles.bodyContainer__section_right}>
          {childrenArray[1]}
        </div>
      </div>
    );
  }
};

export default BodyContainer;
