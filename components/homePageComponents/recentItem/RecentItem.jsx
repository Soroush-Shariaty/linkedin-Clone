import styles from "../../../styles/homePageStyles/recentItem.module.css";
import Link from "next/link";
const RecentItem = ({ children, href, text }) => {
  return (
    <div className={styles.recentItem}>
      <Link href={href}>
        <div className={styles.recentItem__container}>
          {children}
          <span>{text}</span>
        </div>
      </Link>
    </div>
  );
};

export default RecentItem;
