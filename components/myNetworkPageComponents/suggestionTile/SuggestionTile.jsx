import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

import styles from "../../../styles/myNetworkPageStyles/suggestionTile.module.css";

const SuggestionTile = ({
  name,
  profilePhoto,
  job,
  backgroundImage,
  userId,
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isXbuttonClicked, setIsXbuttonClicked] = useState(false);
  const { t } = useTranslation(["mynetwork"]);
  return (
    <div
      className={styles.suggestionTile}
      style={isXbuttonClicked ? { display: "none" } : { display: "block" }}
    >
      <div>
        <div className={styles.suggestionTile__background_img_container}>
          <Image
            height={70}
            src={`/images/${backgroundImage}`}
            alt="background"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div
          className={styles.suggestionTile__xbutton}
          onClick={() => setIsXbuttonClicked(true)}
        >
          <AiOutlineClose />
        </div>
        <div className={styles.suggestionTile__user_img_container}>
          <Image
            className={styles.suggestionTile__user_img}
            src={`/images/${profilePhoto}`}
            alt="user"
            layout="fill"
          />
        </div>
      </div>
      <Link href={`/users/${userId}`}>
        <a className={styles.suggestionTile__user_name}>
          <h4 className={styles.suggestionTile__user_name_text}>{name}</h4>
        </a>
      </Link>
      <p className={styles.suggestionTile__description}>{job}</p>
      <button className={styles.suggestionTile__mutual}>
        2 {t("mutual_connections")}
      </button>
      <div className={styles.suggestionTile__btnContainer}>
        <button
          className={
            isButtonClicked
              ? styles.suggestionTile__btn_pending
              : styles.suggestionTile__btn
          }
          onClick={() => setIsButtonClicked(!isButtonClicked)}
        >
          {isButtonClicked ? (
            <p>
              <BiCheck /> {t("pending")}
            </p>
          ) : (
            t("connect")
          )}
        </button>
      </div>
    </div>
  );
};

export default SuggestionTile;
