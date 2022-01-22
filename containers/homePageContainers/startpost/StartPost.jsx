import Image from "next/image";
import {
  AiFillPicture,
  AiFillPlaySquare,
  AiFillCalendar,
  AiOutlinePicLeft,
} from "react-icons/ai";
import { StartpostButton } from "../../../components/homePageComponents/index";
import styles from "../../../styles/homePageStyles/startpost.module.css";
import userPic from "../../../public/images/User-img.jpg";

const StartPost = () => {
  return (
    <div className={styles.startPost}>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div className={styles.startPost__user_img_container}>
          <Image
            src={userPic}
            layout="responsive"
            alt="user"
            className={styles.startPost__user_img}
          />
        </div>
        <button className={styles.startPost__btn}>Start a post</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StartpostButton text="Photo" color="#70b5f9">
          <AiFillPicture />
        </StartpostButton>
        <StartpostButton text="Video" color="#7fc15e">
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
