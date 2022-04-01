import styles from "../../../styles/indexPageStyles/sortby.module.css";
import { useTranslation } from "react-i18next";
import SortbyButton from "./SortbyButton";

const Sortby = () => {
  const { t } = useTranslation(["feed"]);
  return (
    <div className={styles.sortby}>
      <hr className={styles.sortby__hr} />
      <span className={styles.sortby__title}>{t("sort_by")}:</span>
      <SortbyButton />
    </div>
  );
};

export default Sortby;
