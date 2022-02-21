import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";
import { RecentItem } from "../../../components/indexPageComponents/index";
import styles from "../../../styles/indexPageStyles/recent.module.css";

const Recent = () => {
  return (
    <div>
      <div className={styles.recent}>
        <div>
          <p className={styles.recent__title}>Recent</p>
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
            <a className={styles.recent__groups}>Groups</a>
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
            Event
          </a>
          <a className="event__link-icon fa fa-plus" href="#"></a>
        </div>
        <div>
          <a className={styles.recent__groups} href="#">
            followed Hashtags
          </a>
          <a className={styles.recent__discover} href="#">
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recent;
