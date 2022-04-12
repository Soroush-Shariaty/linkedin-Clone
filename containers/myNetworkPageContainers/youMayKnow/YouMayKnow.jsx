import Link from "next/link";
import SuggestionTile from "../../../components/myNetworkPageComponents/suggestionTile/SuggestionTile";
import styles from "../../../styles/myNetworkPageStyles/youMayKnow.module.css";
import { useTranslation } from "react-i18next";

const YouMayKnow = ({ users }) => {
  console.log(users);
  const { t } = useTranslation(["mynetwork"]);
  return (
    <div className={styles.youMayKnow}>
      <div className={styles.youMayKnow__header}>
        <p>{t("industry_leaders_you_may_know")}</p>
        <button>{t("see_all")}</button>
      </div>
      <div className={styles.youMayKnow__connectSuggestionTiles}>
        {users.map((user) => (
          <SuggestionTile
            name={user.name}
            profilePhoto={user.profilePhoto}
            job={user.description}
            backgroundImage={user.backgroundImage}
            userId={user.ID}
            key={user.ID}
          />
        ))}
      </div>
    </div>
  );
};

export default YouMayKnow;
