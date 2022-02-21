import Image from "next/image";
import styles from "../../../styles/indexPageStyles/comment.module.css";

const Comment = ({ text, owner, level }) => {
  // console.log(owner);
  return (
    <div className={styles.comment} style={{ marginLeft: `${50 * level}px` }}>
      <div className={styles.comment__owner_img_container}>
        <Image
          className={styles.comment__owner_img}
          src={`/images/${owner.profilePhoto}`}
          alt=""
          width={50}
          height={50}
        />
      </div>
      <div className={styles.comment__container}>
        <div className={styles.comment__owner_info}>
          <div className={styles.comment__owner_info_name_container}>
            <span>{owner.name}</span>
            <span>{owner.description}</span>
          </div>
          <div>
            <span>14:45</span>
          </div>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
