import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import {
  AiFillPicture,
  AiFillPlaySquare,
  AiFillCalendar,
  AiOutlinePicLeft,
} from "react-icons/ai";
import { StartpostButton } from "../../../components/indexPageComponents/index";
import {
  StartPostPhotoModal,
  StartPostVideoModal,
  StartPostModal,
} from "../../../modals/homePageModals/index";

import styles from "../../../styles/indexPageStyles/startpost.module.css";
import userPic from "../../../public/images/User-img.jpg";
import { useTranslation } from "react-i18next";

const StartPost = () => {
  const [isPhotoModalOpen, setisPhotoModalOpen] = useState(false);
  const [isVideoModalOpen, setisVideoModalOpen] = useState(false);
  const [isPostModalOpen, setisPostModalOpen] = useState(false);
  const { t } = useTranslation(["feed"]);
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.startPost}>
      <StartPostPhotoModal
        isOpen={isPhotoModalOpen}
        closeModal={() => setisPhotoModalOpen(false)}
      />
      <StartPostVideoModal
        isOpen={isVideoModalOpen}
        closeModal={() => setisVideoModalOpen(false)}
      />
      <StartPostModal
        isOpen={isPostModalOpen}
        closeModal={() => setisPostModalOpen(false)}
      />
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div className={styles.startPost__user_img_container}>
          <Image
            src={`/images/${user.profilePhoto}`}
            width={50}
            height={50}
            alt="user"
            className={styles.startPost__user_img}
          />
        </div>
        <button
          className={styles.startPost__btn}
          onClick={() => setisPostModalOpen(true)}
        >
          {t("start_a_post")}
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StartpostButton
          text={t("photo")}
          color="#70b5f9"
          action={() => setisPhotoModalOpen(true)}
        >
          <AiFillPicture />
        </StartpostButton>
        <StartpostButton
          text={t("video")}
          color="#7fc15e"
          action={() => setisVideoModalOpen(true)}
        >
          <AiFillPlaySquare />
        </StartpostButton>
        <StartpostButton text={t("event")} color="#e7a33e">
          <AiFillCalendar />
        </StartpostButton>
        <StartpostButton text={t("write_article")} color="#e7a33e">
          <AiOutlinePicLeft />
        </StartpostButton>
      </div>
    </div>
  );
};

export default StartPost;
