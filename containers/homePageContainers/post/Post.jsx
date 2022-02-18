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
import profileImage2 from "../../../public/images/User-img.jpg";
import PostButton from "../../../components/homePageComponents/postButton/postButton";
import PostComments from "./../postComments/PostComments";
import { useState, useEffect } from "react";
import Comment from "./../../../components/homePageComponents/comment/Comment";

const Post = ({
  description,
  likeCount,
  postOwner,
  postOwnerDescription,
  postPhoto,
  ownerPhoto,
  comments,
}) => {
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
          src={`/images/${ownerPhoto}`}
          alt=""
          width={50}
          height={50}
        />
        <div className={styles.post__owner_info}>
          <span>{postOwner}</span>
          <span>{postOwnerDescription}</span>
          <span>
            8h <FaGlobeAmericas />{" "}
          </span>
        </div>
      </div>
      <p className={styles.post__text}>{description}</p>
      <div className={styles.post__img}>
        <Image
          src={`/images/${postPhoto.name}`}
          alt=""
          height={postPhoto.height}
          width={postPhoto.width}
          layout="responsive"
        />
      </div>
      <div className={styles.post__feedback}>
        <div className={styles.post__likes_info}>
          <MdThumbUpAlt />
          <span>{likeCount}</span>
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
        <PostComments profilePhoto={ownerPhoto} comments={comments} />
      </div>
    </div>
  );
};

export default Post;
