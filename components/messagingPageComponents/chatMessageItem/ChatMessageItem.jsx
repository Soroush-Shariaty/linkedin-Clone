import Image from "next/image";

import styles from "../../../styles/messagingPageStyles/chatMessageItem.module.css";
import userImg from "../../../public/images/User-img.jpg";

const ChatMessageItem = () => {
  return (
    <div className={styles.chatMessageItem}>
      <div className={styles.chatMessageItem__container}>
        <div className={styles.chatMessageItem__owner}>
          <Image
            className={styles.chatMessageItem__owner_img}
            src={userImg}
            alt=""
            width={40}
            height={40}
          />
          <div className={styles.chatMessageItem__owner_info}>
            <span>John Doe</span>
            <span>14:45</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          repellendus libero illum ut eligendi ex exercitationem est hic
          similique voluptatibus dolor quibusdam, tempora voluptas fugiat
          quisquam! Ipsum delectus odio libero.
        </p>
      </div>
    </div>
  );
};

export default ChatMessageItem;
