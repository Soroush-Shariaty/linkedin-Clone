import { FcAbout } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import styles from "../../../styles/userPageStyles/suggestedForYou.module.css";

const SuggestedForYou = () => {
  const { t } = useTranslation(["user"]);
  return (
    <div className={styles.suggestedForYou}>
      <h3 className={styles.suggestedForYou__title}>
        {t("suggested_for_you")}
      </h3>
      <div className={styles.suggestedForYou_privateToYouContainer}>
        <AiFillEye />
        <p>{t("private_to_you")}</p>
      </div>
      <div className={styles.suggestedForYou__progressContainer}>
        <progress max={7} value={6} />
        <p>6/7</p>
      </div>
      <div className={styles.suggestedForYou__summaryContainer}>
        <div
          className={styles.suggestedForYou__summaryContainer__titleContainer}
        >
          <FcAbout />
          <h3>
            {t(
              "write_a_summary_to_highlight_your_personality_or_work_experience"
            )}
          </h3>
        </div>
        <p>
          {t(
            "members_who_include_a_summary_receive_up_to_3.9_times_as_many_profile_views"
          )}
        </p>
        <button className={styles.suggestedForYou__summaryContainer_btn}>
          {t("add_a_summary")}
        </button>
      </div>
    </div>
  );
};

export default SuggestedForYou;
