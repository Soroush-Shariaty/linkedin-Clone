import styles from "../../../styles/indexPageStyles/sortby.module.css";
import { useTranslation } from "react-i18next";

const Sortby = () => {
  const { t } = useTranslation(["feed"]);
  return (
    <div className={styles.sortby}>
      <hr className={styles.sortby__hr} />
      <span className={styles.sortby__title}>{t("sort_by")}:</span>
      <select className={styles.sortby__dorp_down}>
        <option value="">{t("recent")}</option>
        <option value="">{t("top")}</option>
      </select>
    </div>
  );
};

export default Sortby;
