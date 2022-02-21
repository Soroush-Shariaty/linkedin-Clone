import styles from "../../../styles/indexPageStyles/postButton.module.css";

const PostButton = ({ children, text, onClick, color = "" }) => {
  return (
    <button
      className={styles.postButton}
      onClick={onClick}
      style={{ color: color }}
    >
      <div style={{ color: color }}>{children}</div>
      <p>{text}</p>
    </button>
  );
};

export default PostButton;
