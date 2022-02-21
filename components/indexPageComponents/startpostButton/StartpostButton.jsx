import styles from "../../../styles/indexPageStyles/startpostButton.module.css";

const StartpostButton = ({ children, text, color, action }) => {
  return (
    <button className={styles.startpostButton} onClick={action}>
      <div style={{ color: `${color}` }}>{children}</div>
      <p>{text}</p>
    </button>
  );
};

export default StartpostButton;
