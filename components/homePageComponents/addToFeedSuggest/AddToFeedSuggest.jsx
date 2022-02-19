import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "../../../styles/homePageStyles/addToFeedSuggest.module.css";

const AddToFeedSuggest = ({ image, name, description }) => {
  console.log(name);
  return (
    <div className={styles.addToFeedSuggest}>
      <div style={{ display: "flex" }}>
        <div>
          <Image
            width={50}
            height={50}
            className={styles.addToFeedSuggest__owner_img}
            src={`/images/${image}`}
            alt=""
          />
        </div>
        <div className={styles.addToFeedSuggest__owner_info}>
          <span>{name}</span>
          <span>{description}</span>
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
