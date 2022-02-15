import styles from "../../../styles/homePageStyles/postComments.module.css";
import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";
import userPic from "../../../public/images/User-img.jpg";

const PostComments = () => {
  return (
    <div>
      <div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <div className={styles.startPost__user_img_container}>
            <Image
              src={userPic}
              layout="responsive"
              alt="user"
              className={styles.startPost__user_img}
            />
          </div>
          <TextareaAutosize
            placeholder="Add a comment..."
            className={styles.startPost__btn}
            maxRows={20}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PostComments;
