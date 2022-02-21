import styles from "../../../styles/indexPageStyles/postComments.module.css";
import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import Comment from "../../../components/indexPageComponents/comment/Comment";

const PostComments = ({
  profilePhoto,
  comments,
  postOwner,
  postOwnerDescription,
}) => {
  const [showButton, setShowButton] = useState("");
  const owner = {
    profilePhoto,
    name: postOwner,
    description: postOwnerDescription,
  };
  let commentJsxList = [];
  comments.map((comment) => {
    let commentComp = (
      <Comment
        key={comment.commentId}
        level={0}
        owner={comment.CommentOwner}
        text={comment.text}
      />
    );
    let replies = [];
    comment.replies.map((reply) => {
      replies.push(
        <Comment
          key={reply.commentId}
          level={1}
          owner={reply.replyOwner}
          text={reply.text}
        />
      );
      reply.repliesOfReply.map((replyofReply) => {
        replies.push(
          <Comment
            key={replyofReply.commentId}
            level={2}
            owner={replyofReply.replyOfReplyOwner}
            text={replyofReply.text}
          />
        );
      });
    });
    commentJsxList.push(commentComp);
    commentJsxList.push(replies);
  });
  const [commentsList, setCommentsList] = useState(commentJsxList);
  const [newCommentText, setnewCommentText] = useState("");
  const onCommentSubmit = () => {
    const newComment = (
      <Comment key={100000} level={0} owner={owner} text={newCommentText} />
    );
    commentJsxList.unshift(newComment);
    setCommentsList(commentJsxList);
  };
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
            value={newCommentText}
            onChange={(event) => {
              setShowButton(event.target.value);
              setnewCommentText(event.target.value);
            }}
          />
        </div>
        <div style={showButton ? { display: "block" } : { display: "none" }}>
          <button
            onClick={onCommentSubmit}
            className={styles.postComments__postButton}
          >
            Post
          </button>
        </div>
      </div>
      <div>{commentsList}</div>
    </div>
  );
};

export default PostComments;
