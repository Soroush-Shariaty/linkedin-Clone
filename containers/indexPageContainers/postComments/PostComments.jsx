import { useState } from "react";
import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";
import { useSelector } from "react-redux";
import {
  Comment,
  PostCommentInput,
} from "../../../components/indexPageComponents/index";

import styles from "../../../styles/indexPageStyles/postComments.module.css";

const PostComments = ({
  profilePhoto,
  comments,
  postOwner,
  postOwnerDescription,
}) => {
  const user = useSelector((state) => state.user);
  let commentJsxList = [];
  comments.map((comment) => {
    let commentComp = (
      <Comment
        key={comment.commentId}
        level={0}
        owner={comment.CommentOwner}
        text={comment.text}
        time={comment.time}
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
          time={reply.time}
        />
      );
      reply.repliesOfReply.map((replyofReply) => {
        replies.push(
          <Comment
            key={replyofReply.commentId}
            level={2}
            owner={replyofReply.replyOfReplyOwner}
            text={replyofReply.text}
            time={replyofReply.time}
          />
        );
      });
    });
    commentJsxList.push(commentComp);
    commentJsxList.push(replies);
  });
  const [commentsList, setCommentsList] = useState(commentJsxList);

  const onCommentSubmit = (newCommentText) => {
    const newComment = (
      <Comment key={100000} level={0} owner={user} text={newCommentText} />
    );
    commentJsxList.unshift(newComment);
    setCommentsList(commentJsxList);
  };
  return (
    <div>
      <PostCommentInput onCommentSubmit={onCommentSubmit} />
      <div>{commentsList}</div>
    </div>
  );
};

export default PostComments;
