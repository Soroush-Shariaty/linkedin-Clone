import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/indexPageStyles/profile.module.css";
import userImage from "../../../public/images/User-img.jpg";
import bgImage from "../../../public/images/Background.jpg";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <div>
        <div className={styles.profile__background_img_container}>
          <Image
            height={70}
            src={bgImage}
            alt="background"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className={styles.profile__user_img_container}>
          <Image
            className={styles.profile__user_img}
            src={userImage}
            alt="user"
            layout="fill"
          />
        </div>
      </div>
      <Link href="/nowhere">
        <a className={styles.profile__user_name}>
          <h4 className={styles.profile__user_name_text}>Soroush Shariaty</h4>
        </a>
      </Link>
      <p className={styles.profile__description}>Front-End Developer</p>
      <hr className={styles.profile__separator} />
      <div className={styles.profile__links}>
        <Link href="/status">
          <div className={styles.profile__status}>
            <p className={styles.profile__status__item}>
              Who viewed your profile
            </p>
            <p className={styles.profile__status__value}>25</p>
          </div>
        </Link>
        <Link href="/connections">
          <div className={styles.profile__status}>
            <div>
              <p className={styles.profile__status__item}>Connections</p>
              <p className={styles.profile__status__item_bold}>
                Grow your network
              </p>
            </div>
            <p className={styles.profile__status__value}>178</p>
          </div>
        </Link>
        <hr className={styles.profile__horz_lines} />
        <Link href="/premium">
          <div className={styles.profile__premium}>
            <p className={styles.profile__premium_item}>
              Access exclusive tools and insights
            </p>
            <p className={styles.profile__premium_item_bold}>
              Try premium for free
            </p>
          </div>
        </Link>
        <hr className={styles.profile__horz_lines} />
        <Link href="/myitems">
          <div className={styles.profile__my_Items}>
            <p className={styles.profile__my_Items__item}>My Items</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
