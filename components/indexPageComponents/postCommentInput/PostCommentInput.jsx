import { useState } from "react";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import styles from "../../../styles/indexPageStyles/postCommentInput.module.css";

const PostCommentInput = ({ onCommentSubmit }) => {
  const [showButton, setShowButton] = useState("");
  const [newCommentText, setnewCommentText] = useState("");
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div className={styles.postCommentInput__img_container}>
          <img
            src={`/images/${user.profilePhoto}`}
            alt="user"
            className={styles.postCommentInput__img}
          />
        </div>
        <TextareaAutosize
          placeholder="Add a comment..."
          className={styles.postCommentInput__textarea}
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
          className={styles.postCommentInput__postButton}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostCommentInput;
