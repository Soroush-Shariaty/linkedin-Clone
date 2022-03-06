import styles from "../../../styles/userPageStyles/showcase.module.css";
const Showcase = ({ user }) => {
  return (
    <div className={styles.showcase}>
      <div
        className={styles.showcase__backgroundPhoto}
        alt=""
        style={{ backgroundImage: `url(/images/${user.backgroundImage})` }}
      />
      <div className={styles.showcase__container}>
        <img
          className={styles.showcase__profilePhoto}
          src={`/images/${user.profilePhoto}`}
          alt=""
        />
        <h3 className={styles.showcase__userName}>{user.name}</h3>
        <p className={styles.showcase__description}>{user.description}</p>
        <p className={styles.showcase__connections}>300 connections</p>
        <button className={styles.showcase__openToBtn}>Open to</button>
        <button className={styles.showcase__addSectionBtn}>
          Add profile section
        </button>
        <button className={styles.showcase__moreBtn}>More</button>
      </div>
    </div>
  );
};

export default Showcase;
