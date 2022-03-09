import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "../../../styles/indexPageStyles/profile.module.css";
import userImage from "../../../public/images/User-img.jpg";
import { useTranslation } from "react-i18next";
// import bgImage from "../../../public/images/bg1.jpg";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const { t } = useTranslation(["feed"]);
  return (
    <div className={styles.profile}>
      <div>
        <div className={styles.profile__background_img_container}>
          <Image
            height={70}
            src={`/images/${user.backgroundImage}`}
            alt="background"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className={styles.profile__user_img_container}>
          <Image
            className={styles.profile__user_img}
            src={`/images/${user.profilePhoto}`}
            alt="user"
            layout="fill"
          />
        </div>
      </div>
      <Link href="/nowhere">
        <a className={styles.profile__user_name}>
          <h4 className={styles.profile__user_name_text}>{user.name}</h4>
        </a>
      </Link>
      <p className={styles.profile__description}>{user.description}</p>
      <hr className={styles.profile__separator} />
      <div className={styles.profile__links}>
        <Link href="/status">
          <div className={styles.profile__status}>
            <p className={styles.profile__status__item}>
              {t("who_viewed_your_profile")}
            </p>
            <p className={styles.profile__status__value}>25</p>
          </div>
        </Link>
        <Link href="/connections">
          <div className={styles.profile__status}>
            <div>
              <p className={styles.profile__status__item}>{t("connections")}</p>
              <p className={styles.profile__status__item_bold}>
                {t("grow_your_network")}
              </p>
            </div>
            <p className={styles.profile__status__value}>178</p>
          </div>
        </Link>
        <hr className={styles.profile__horz_lines} />
        <Link href="/premium">
          <div className={styles.profile__premium_container}>
            <div className={styles.profile__premium}>
              <p className={styles.profile__premium_item}>
                {t("access_exclusive_tools_and_insights")}
              </p>
              <p className={styles.profile__premium_item_bold}>
                {t("try_premium_for_free")}
              </p>
            </div>
          </div>
        </Link>
        <hr className={styles.profile__horz_lines} />
        <Link href="/myitems">
          <div className={styles.profile__my_Items}>
            <p className={styles.profile__my_Items__item}>{t("my_items")}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
