import { FcAbout } from "react-icons/fc";
import { AiOutlineSearch, AiOutlineBarChart, AiFillEye } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import AnalyticsItem from "./AnalyticsItem";
import styles from "../../../styles/userPageStyles/analytics.module.css";

const Analytics = () => {
  return (
    <div className={styles.analytics}>
      <h3 className={styles.analytics__title}>Analytics</h3>
      <div className={styles.analytics__privateToYouContainer}>
        <AiFillEye />
        <p>Private to you</p>
      </div>
      <div className={styles.analytics__itemContainer}>
        <AnalyticsItem
          icon={<BsPeopleFill />}
          title="94 profile views"
          description="Discover who's viewed your profile."
          href="/"
        />
        <AnalyticsItem
          icon={<AiOutlineBarChart />}
          title="401 video views"
          description="Check out who's engaging with your videos."
          href="/"
        />
        <AnalyticsItem
          icon={<AiOutlineSearch />}
          title="search appearances"
          description="See how often you appear in search results."
          href="/"
        />
      </div>
    </div>
  );
};

export default Analytics;
