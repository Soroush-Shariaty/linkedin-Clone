import Link from "next/link";
import SuggestionTile from "../../../components/myNetworkPageComponents/suggestionTile/SuggestionTile";
import styles from "../../../styles/myNetworkPageStyles/youMayKnow.module.css";
import { useTranslation } from "react-i18next";
const YouMayKnow = () => {
  let arr = [];
  for (let i = 0; i < 12; i++) {
    arr.push(<SuggestionTile />);
  }
  const { t } = useTranslation(["mynetwork"]);
  return (
    <div className={styles.youMayKnow}>
      <div className={styles.youMayKnow__header}>
        <p>{t("industry_leaders_you_may_know")}</p>
        <button>{t("see_all")}</button>
      </div>
      <div className={styles.youMayKnow__connectSuggestionTiles}>
        {arr.map((item) => item)}
      </div>
    </div>
  );
};

export default YouMayKnow;
