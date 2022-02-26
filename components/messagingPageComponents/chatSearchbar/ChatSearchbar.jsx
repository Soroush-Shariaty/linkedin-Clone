import { AiOutlineSearch } from "react-icons/ai";
import { BsGearWide } from "react-icons/bs";

import styles from "../../../styles/messagingPageStyles/chatSearchbar.module.css";

const ChatSearchbar = () => {
  return (
    <div className={styles.messageSearchbar}>
      <div className={styles.messageSearchbar__container}>
        <AiOutlineSearch
          className={styles.messageSearchbar__container_icon_magnifier}
        />
        <input type="text" placeholder="Search message" />
        <div>
          <BsGearWide
            className={styles.messageSearchbar__container_icon_gear}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatSearchbar;
