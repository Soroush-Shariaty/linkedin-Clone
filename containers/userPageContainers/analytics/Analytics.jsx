import { FcAbout } from "react-icons/fc";
import { AiOutlineSearch, AiOutlineBarChart, AiFillEye } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import AnalyticsItem from "./AnalyticsItem";
import styles from "../../../styles/userPageStyles/analytics.module.css";
import { useTranslation } from "react-i18next";

const Analytics = () => {
  const { t } = useTranslation(["user"]);
  return (
    <div className={styles.analytics}>
      <h3 className={styles.analytics__title}>{t("analytics")}</h3>
      <div className={styles.analytics__privateToYouContainer}>
        <AiFillEye />
        <p>{t("private_to_you")}</p>
      </div>
      <div className={styles.analytics__itemContainer}>
        <AnalyticsItem
          icon={<BsPeopleFill />}
          title={`94 ${t("profile_views")}`}
          description={t("discover_who_viewed_your_profile")}
          href="/"
        />
        <AnalyticsItem
          icon={<AiOutlineBarChart />}
          title={`203 ${t("video_views")}`}
          description={t("check_out_who_engaging_with_your_videos")}
          href="/"
        />
        <AnalyticsItem
          icon={<AiOutlineSearch />}
          title={`317 ${t("search_appearances")}`}
          description={t("see_how_often_you_appear_in_search_results")}
          href="/"
        />
      </div>
    </div>
  );
};

export default Analytics;
