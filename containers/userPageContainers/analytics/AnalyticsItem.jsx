import React from "react";
import Link from "next/link";
import styles from "../../../styles/userPageStyles/analyticsItem.module.css";

const AnalyticsItem = ({ icon, title, description, href }) => {
  return (
    <Link href={href} passHref>
      <div className={styles.analyticsItem}>
        {icon}
        <div className={styles.analyticsItem__textContainer}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default AnalyticsItem;
