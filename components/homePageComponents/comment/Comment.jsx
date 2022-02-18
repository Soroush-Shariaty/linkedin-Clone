import Image from "next/image";
import styles from "../../../styles/homePageStyles/comment.module.css";

const Comment = ({ text, owner, level }) => {
  // console.log(owner);
  return (
    <div className={styles.comment} style={{ marginLeft: `${30 * level}px` }}>
      <div className={styles.comment__container}>
        <div className={styles.comment__owner}>
          <Image
            className={styles.comment__owner_img}
            src={`/images/${owner.profilePhoto}`}
            alt=""
            width={40}
            height={40}
          />
          <div className={styles.comment__owner_info}>
            <span>{owner.name}</span>
            <span>14:45</span>
          </div>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
