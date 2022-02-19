import styles from "../../../styles/homePageStyles/postComments.module.css";
import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";
import userPic from "../../../public/images/User-img.jpg";
import { useState } from "react";
import Comment from "../../../components/homePageComponents/comment/Comment";

const PostComments = ({ profilePhoto, comments }) => {
  const [showButton, setShowButton] = useState("");
  // console.log(comments);
  return (
    <div>
      <div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <div className={styles.postComments__user_img_container}>
            <Image
              src={`/images/${profilePhoto}`}
              layout="responsive"
              alt="user"
              width={50}
              height={50}
              className={styles.postComments__user_img}
            />
          </div>
          <TextareaAutosize
            placeholder="Add a comment..."
            className={styles.postComments__textarea}
            maxRows={20}
            value={showButton}
            onChange={(event) => setShowButton(event.target.value)}
          />
        </div>
        <div style={showButton ? { display: "block" } : { display: "none" }}>
          <button className={styles.postComments__postButton}>Post</button>
        </div>
      </div>
      <div>
        {comments.map((comment) => {
          let commentComp = (
            <Comment
              key={1}
              level={0}
              owner={comment.CommentOwner}
              text={comment.text}
            />
          );
          let replies = [];
          comment.replies.map((reply) => {
            replies.push(
              <Comment
                key={2}
                level={1}
                owner={reply.replyOwner}
                text={reply.text}
              />
            );
            reply.repliesOfReply.map((replyofReply) => {
              replies.push(
                <Comment
                  key={3}
                  level={2}
                  owner={replyofReply.replyOfReplyOwner}
                  text={replyofReply.text}
                />
              );
            });
          });

          return (
            <div key={1}>
              {commentComp}
              {replies}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostComments;
