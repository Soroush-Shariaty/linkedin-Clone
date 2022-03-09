import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/myNetworkPageStyles/suggestionTile.module.css";
import userImage from "../../../public/images/User-img.jpg";
import bgImage from "../../../public/images/bg1.jpg";
import { useTranslation } from "react-i18next";

const SuggestionTile = () => {
  const { t } = useTranslation(["mynetwork"]);
  return (
    <div className={styles.suggestionTile}>
      <div>
        <div className={styles.suggestionTile__background_img_container}>
          <Image
            height={70}
            src={bgImage}
            alt="background"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className={styles.suggestionTile__user_img_container}>
          <Image
            className={styles.suggestionTile__user_img}
            src={userImage}
            alt="user"
            layout="fill"
          />
        </div>
      </div>
      <Link href="/nowhere">
        <a className={styles.suggestionTile__user_name}>
          <h4 className={styles.suggestionTile__user_name_text}>
            Soroush Shariaty
          </h4>
        </a>
      </Link>
      <p className={styles.suggestionTile__description}>Front-End Developer</p>
      <button className={styles.suggestionTile__mutual}>
        2 {t("mutual_connections")}
      </button>
      <div className={styles.suggestionTile__btnContainer}>
        <button className={styles.suggestionTile__btn}>{t("connect")}</button>
      </div>
    </div>
  );
};

export default SuggestionTile;
