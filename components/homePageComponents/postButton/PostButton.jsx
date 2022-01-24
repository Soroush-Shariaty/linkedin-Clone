import styles from "../../../styles/homePageStyles/postButton.module.css";

const PostButton = ({ children, text }) => {
  return (
    <button className={styles.postButton} href="#">
      <div>{children}</div>
      <p>{text}</p>
    </button>
  );
};

export default PostButton;
