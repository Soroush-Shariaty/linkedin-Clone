import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaUserFriends } from "react-icons/fa";
import { RecentItem } from "../../../components/indexPageComponents/index";

import styles from "../../../styles/indexPageStyles/recent.module.css";

const Recent = () => {
  const { t } = useTranslation(["feed"]);
  return (
    <div>
      <div className={styles.recent}>
        <div>
          <p className={styles.recent__title}>{t("recent")}</p>
          <RecentItem text="W3 Consertium" href="#">
            <FaUserFriends />
          </RecentItem>
          <RecentItem text="React Developers" href="#">
            <FaUserFriends />
          </RecentItem>
          <RecentItem text="Meta" href="#">
            <FaUserFriends />
          </RecentItem>
        </div>
        <div>
          <Link href="/groups" passHref>
            <a className={styles.recent__groups}>{t("groups")}</a>
          </Link>
          <RecentItem text="W3 Consertium" href="#">
            <FaUserFriends />
          </RecentItem>
          <RecentItem text="React Developers" href="#">
            <FaUserFriends />
          </RecentItem>
          <RecentItem text="Meta" href="#">
            <FaUserFriends />
          </RecentItem>
        </div>
        <div className={styles.recent__event}>
          <a className={styles.recent__groups} href="#">
            {t("events")}
          </a>
        </div>
        <div>
          <a className={styles.recent__groups} href="#">
            {t("followed_hashtags")}
          </a>
          <a className={styles.recent__discover} href="#">
            {t("discover_more")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recent;
