import Link from "next/link";
import styles from "../../../styles/myNetworkPageStyles/manageNetworkOption.module.css";

const ManageNetworkOption = ({ href, children, text, number }) => {
  return (
    <Link href={href} passHref>
      <div className={styles.manageNetworkOption}>
        <div className={styles.manageNetworkOption__container}>
          <div
            className={styles.manageNetworkOption__container__icon_container}
          >
            <div>{children}</div>
            <p>{text}</p>
          </div>
          <p>{number}</p>
        </div>
      </div>
    </Link>
  );
};

export default ManageNetworkOption;
