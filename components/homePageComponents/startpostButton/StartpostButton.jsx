import styles from "../../../styles/homePageStyles/startpostButton.module.css";
const StartpostButton = ({ children, text, color }) => {
  return (
    <button className={styles.startpostButton} href="#">
      <div style={{ color: `${color}` }}>{children}</div>
      <p>{text}</p>
    </button>
  );
};

export default StartpostButton;
