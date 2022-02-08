import Image from "next/image";
import styles from "../../../styles/messagingPageStyles/chatContactItem.module.css";
import userImg from "../../../public/images/person2.jpg";

const ChatContactItem = ({ active }) => {
  return (
    <div className={styles.chatContactItem}>
      <div className={styles.chatContactItem__container}>
        <div className={styles.chatContactItem__owner}>
          <Image
            className={styles.chatContactItem__owner_img}
            src={userImg}
            alt=""
            width={60}
            height={60}
          />
          <div className={styles.chatContactItem__owner_info}>
            <span>John Doe</span>
            <span>CEO at SomeCompany</span>
            <span>8h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContactItem;
