import styles from "../../../styles/homePageStyles/sortby.module.css";

const Sortby = () => {
  return (
    <div className={styles.sortby}>
      <hr className={styles.sortby__hr} />
      <span className={styles.sortby__title}>Sort by:</span>
      <select className={styles.sortby__dorp_down}>
        <option value="">Recent</option>
        <option value="">Top</option>
      </select>
    </div>
  );
};

export default Sortby;
