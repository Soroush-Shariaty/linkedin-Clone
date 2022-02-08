import ChatMessageItem from "./../chatMessageItem/ChatMessageItem";
import styles from "../../../styles/messagingPageStyles/chatLog.module.css";
const ChatLog = () => {
  return (
    <div className={styles.chatLog}>
      <ChatMessageItem />
      <ChatMessageItem />
      <ChatMessageItem />
      <ChatMessageItem />
      <ChatMessageItem />
      <ChatMessageItem />
      <ChatMessageItem />
    </div>
  );
};

export default ChatLog;
