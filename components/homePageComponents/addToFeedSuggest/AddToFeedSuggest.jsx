import Image from "next/image";
import styles from "../../../styles/homePageStyles/addToFeedSuggest.module.css";
import userImg from "../../../public/images/User-img.jpg";
import { FaPlus } from "react-icons/fa";

const AddToFeedSuggest = () => {
  return (
    <div className={styles.addToFeedSuggest}>
      <div style={{ display: "flex" }}>
        <div>
          <Image
            width={50}
            height={50}
            className={styles.addToFeedSuggest__owner_img}
            src={userImg}
            alt=""
          />
        </div>
        <div className={styles.addToFeedSuggest__owner_info}>
          <span>Soroush Shariaty</span>
          <span>Front-End Developer</span>
          <button className={styles.addToFeedSuggest__btn}>
            <FaPlus />
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToFeedSuggest;
