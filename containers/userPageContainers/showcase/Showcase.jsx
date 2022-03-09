import { useTranslation } from "react-i18next";
import styles from "../../../styles/userPageStyles/showcase.module.css";
const Showcase = ({ user }) => {
  const { t } = useTranslation(["user"]);
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
        <p className={styles.showcase__connections}>300 {t("connections")}</p>
        <button className={styles.showcase__openToBtn}>{t("open_to")}</button>
        <button className={styles.showcase__addSectionBtn}>
          {t("add_profile_section")}
        </button>
        <button className={styles.showcase__moreBtn}>{t("more")}</button>
      </div>
    </div>
  );
};

export default Showcase;
