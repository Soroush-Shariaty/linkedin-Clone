import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/bodyContainer.module.css";

const BodyContainer = ({ children, isMessagingPage }) => {
  const childrenArray = React.Children.toArray(children);
  const dispatch = useDispatch();
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
      <div className={[styles.bodyContainer, "section-padding"].join(" ")}>
        <div
          className={styles.bodyContainer__section_left}
          style={isMessagingPage && { flex: "0.7" }}
        >
          {childrenArray[0]}
        </div>
        <div
          className={styles.bodyContainer__section_right}
          style={isMessagingPage && { flex: "0.3" }}
        >
          {childrenArray[1]}
        </div>
      </div>
    );
  }
};

export default BodyContainer;
