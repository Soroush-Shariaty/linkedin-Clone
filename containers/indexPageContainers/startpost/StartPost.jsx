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
} from "../../../modals/homePageModals/index";

import styles from "../../../styles/indexPageStyles/startpost.module.css";
import userPic from "../../../public/images/User-img.jpg";

const StartPost = () => {
  const [isPhotoModalOpen, setisPhotoModalOpen] = useState(false);
  const [isVideoModalOpen, setisVideoModalOpen] = useState(false);
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
        <button className={styles.startPost__btn}>Start a post</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StartpostButton
          text="Photo"
          color="#70b5f9"
          action={() => setisPhotoModalOpen(true)}
        >
          <AiFillPicture />
        </StartpostButton>
        <StartpostButton
          text="Video"
          color="#7fc15e"
          action={() => setisVideoModalOpen(true)}
        >
          <AiFillPlaySquare />
        </StartpostButton>
        <StartpostButton text="Event" color="#e7a33e">
          <AiFillCalendar />
        </StartpostButton>
        <StartpostButton text="Write article" color="#e7a33e">
          <AiOutlinePicLeft />
        </StartpostButton>
      </div>
    </div>
  );
};

export default StartPost;
