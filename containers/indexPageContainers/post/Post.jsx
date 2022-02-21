import Image from "next/image";
import {
  FaRegThumbsUp,
  FaRegCommentDots,
  FaShare,
  FaPaperPlane,
  FaGlobeAmericas,
  FaThumbsUp,
} from "react-icons/fa";
import { MdThumbUpAlt } from "react-icons/md";
import styles from "../../../styles/indexPageStyles/post.module.css";
import PostButton from "../../../components/indexPageComponents/postButton/postButton";
import PostComments from "../postComments/PostComments";
import { useState } from "react";

const Post = ({
  description,
  likeCount,
  postOwner,
  postOwnerDescription,
  postPhoto,
  ownerPhoto,
  comments,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [postLiked, setPostLiked] = useState(false);
  const [newLikeCount, setNewLikeCount] = useState(likeCount);
  let commentCount = 0;
  comments.map((comment) => {
    commentCount++;
    comment.replies.map((reply) => {
      commentCount++;
      reply.repliesOfReply.map(() => {
        commentCount++;
      });
    });
  });
  const onCommentButtonClick = () => {
    setShowComments(!showComments);
  };
  const onLikeButtonClick = () => {
    setPostLiked(!postLiked);
    if (!postLiked) {
      setNewLikeCount(likeCount + 1);
    } else {
      setNewLikeCount(likeCount);
    }
  };
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
          <span>{newLikeCount}</span>
        </div>
        <div>
          <span className={styles.post__comment_info}>
            {commentCount} Comments
          </span>
        </div>
      </div>
      <hr />
      <div className={styles.post__button_container}>
        <PostButton
          text="Like"
          onClick={onLikeButtonClick}
          color={postLiked && "var(--like-button-blue)"}
        >
          {postLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
        </PostButton>
        <PostButton text="Comment" onClick={onCommentButtonClick}>
          <FaRegCommentDots />
        </PostButton>
        <PostButton text="Share" onClick={() => {}}>
          <FaShare />
        </PostButton>
        <PostButton text="Send" onClick={() => {}}>
          <FaPaperPlane />
        </PostButton>
      </div>
      <div style={showComments ? { display: "block" } : { display: "none" }}>
        <PostComments
          profilePhoto={ownerPhoto}
          comments={comments}
          postOwner={postOwner}
          postOwnerDescription={postOwnerDescription}
        />
      </div>
    </div>
  );
};

export default Post;
