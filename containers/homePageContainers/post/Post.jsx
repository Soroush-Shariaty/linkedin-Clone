import Image from "next/image";
import {
  FaRegThumbsUp,
  FaRegCommentDots,
  FaShare,
  FaPaperPlane,
  FaGlobeAmericas,
} from "react-icons/fa";
import { MdThumbUpAlt } from "react-icons/md";
import styles from "../../../styles/homePageStyles/post.module.css";
import userImg from "../../../public/images/User-img.jpg";
import postImg from "../../../public/images/post-pic.jpg";
import PostButton from "../../../components/homePageComponents/postButton/postButton";
import PostComments from "./../postComments/PostComments";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post__like}>
        {/* Descriptive section of who liked the post */}
        {/* <p className={styles.post__like_desc}>
          <b>Soroush Shariaty</b> Likes this
        </p>
        <span>...</span> */}
      </div>
      <hr />
      <div className={styles.post__owner}>
        <Image
          className={styles.post__owner_img}
          src={userImg}
          alt=""
          width={50}
          height={50}
        />
        <div className={styles.post__owner_info}>
          <span>Soroush Shariaty</span>
          <span>Front-End Developer</span>
          <span>
            8h <FaGlobeAmericas />{" "}
          </span>
        </div>
      </div>
      <p className={styles.post__text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
        officiis.
      </p>
      <div className={styles.post__img}>
        <Image src={postImg} alt="" />
      </div>
      <div className={styles.post__feedback}>
        <div className={styles.post__likes_info}>
          <MdThumbUpAlt />
          <span>10</span>
        </div>
        <div>
          <span className={styles.post__comment_info}>4 comment</span>
        </div>
      </div>
      <hr />
      <div className={styles.post__button_container}>
        <PostButton text="Like">
          <FaRegThumbsUp />
        </PostButton>
        <PostButton text="Comment">
          <FaRegCommentDots />
        </PostButton>
        <PostButton text="Share">
          <FaShare />
        </PostButton>
        <PostButton text="Send">
          <FaPaperPlane />
        </PostButton>
      </div>
      <div>
        <PostComments />
      </div>
    </div>
  );
};

export default Post;
