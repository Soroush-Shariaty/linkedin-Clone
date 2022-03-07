import { FcAbout } from "react-icons/fc";
import styles from "../../../styles/userPageStyles/suggestedForYou.module.css";
import { AiFillEye } from "react-icons/ai";

const SuggestedForYou = () => {
  return (
    <div className={styles.suggestedForYou}>
      <h3 className={styles.suggestedForYou__title}>Suggested for you</h3>
      <div className={styles.suggestedForYou_privateToYouContainer}>
        <AiFillEye />
        <p>Private to you</p>
      </div>
      <div className={styles.suggestedForYou__progressContainer}>
        <progress max={7} value={6} />
        <p>6/7</p>
      </div>
      <div className={styles.suggestedForYou__summaryContainer}>
        <div
          className={styles.suggestedForYou__summaryContainer__titleContainer}
        >
          <FcAbout />
          <h3>
            Write a summary to highlight your personality or work experience
          </h3>
        </div>
        <p>
          Members who include a summary receive up to 3.9 times as many profile
          views.
        </p>
        <button className={styles.suggestedForYou__summaryContainer_btn}>
          Add a summary
        </button>
      </div>
    </div>
  );
};

export default SuggestedForYou;
