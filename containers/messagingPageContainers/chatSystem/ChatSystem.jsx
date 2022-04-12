import {
  BsPencilSquare,
  BsThreeDots,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import ChatSearchbar from "./../../../components/messagingPageComponents/chatSearchbar/ChatSearchbar";
import ChatContactItem from "./../../../components/messagingPageComponents/chatContactItem/ChatContactItem";
import styles from "../../../styles/messagingPageStyles/chatSystem.module.css";
// import Chatlog from "../../../components/messagingPageComponents/chatLog/Chatlog";
import Chatbox from "./../../../components/messagingPageComponents/chatbox/Chatbox";
const ChatSystem = () => {
  return (
    <div className={styles.chatSystem}>
      <div
        style={{
          borderRight: "1px solid var(--gray)",
          borderBottom: "1px solid var(--gray)",
        }}
      >
        <div className={styles.chatSystem__header_left}>
          <h1>Messaging</h1>
          <div className={styles.chatSystem__header_left_iconContainer}>
            <div>
              <BsThreeDots />
            </div>
            <div>
              <BsPencilSquare />
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid var(--gray)" }}>
        <div className={styles.chatSystem__header_right}>
          <div>
            <h4>John Doe</h4>
            <p>CEO at SomeCompany</p>
          </div>
          <div className={styles.chatSystem__header_left_iconContainer}>
            <div>
              <BsThreeDots />
            </div>
            <div>
              <BsFillCameraVideoFill />
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderRight: "1px solid var(--gray)" }}>
        <ChatSearchbar />
        <div
          className={styles.chatSystem__header_left_chatContactItemContainer}
        >
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
          <ChatContactItem />
        </div>
      </div>
      <div>
        {/* <Chatlog /> */}
        <Chatbox />
      </div>
    </div>
  );
};

export default ChatSystem;
