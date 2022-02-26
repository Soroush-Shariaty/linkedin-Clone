import Image from "next/image";

import styles from "../../../styles/indexPageStyles/comment.module.css";

const Comment = ({ text, owner, level, time }) => {
  // console.log(owner);
  return (
    <div className={styles.comment} style={{ marginLeft: `${50 * level}px` }}>
      <div className={styles.comment__owner_img_container}>
        <img
          className={styles.comment__owner_img}
          src={`/images/${owner.profilePhoto}`}
          alt=""
        />
      </div>
      <div>
        <div className={styles.comment__container}>
          <div className={styles.comment__owner_info}>
            <div className={styles.comment__owner_info_name_container}>
              <span>{owner.name}</span>
              <span>{owner.description}</span>
            </div>
            <div>
              <span className={styles.comment__time}>{time}</span>
            </div>
          </div>
          <p>{text}</p>
        </div>
        <button className={styles.comment__replybutton}>Reply</button>
      </div>
    </div>
  );
};

export default Comment;
