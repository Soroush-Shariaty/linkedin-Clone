import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import {
  AiOutlinePaperClip,
  AiOutlineGif,
  AiFillPicture,
} from "react-icons/ai";

import styles from "../../../styles/messagingPageStyles/chatbox.module.css";

const Chatbox = () => {
  return (
    <div className={styles.chatbox}>
      <textarea rows="5" placeholder="Write a message..."></textarea>
      <div className={styles.chatbox__bottonContainer}>
        <div className={styles.chatbox__bottonContainer_left}>
          <div className={styles.chatbox__bottonContainer_left_icon}>
            <AiFillPicture />
          </div>
          <div className={styles.chatbox__bottonContainer_left_icon}>
            <AiOutlinePaperClip />
          </div>
          <div className={styles.chatbox__bottonContainer_left_icon}>
            <AiOutlineGif />
          </div>
          <div className={styles.chatbox__bottonContainer_left_icon}>
            <BsEmojiSmile />
          </div>
        </div>
        <div className={styles.chatbox__bottonContainer_right}>
          <div className={styles.chatbox__bottonContainer_right_button}>
            <button>Send</button>
          </div>
          <div className={styles.chatbox__bottonContainer_left_icon}>
            <BsThreeDots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
