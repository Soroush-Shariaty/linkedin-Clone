import { AddToFeedSuggest } from "./../../../components/homePageComponents/index";
import styles from "../../../styles/homePageStyles/addToFeed.module.css";

const AddToFeed = () => {
  return (
    <div className={styles.addtofeed}>
      <h4 className={styles.addtofeed__title}>Add to your feed</h4>
      <AddToFeedSuggest />
      <AddToFeedSuggest />
      <AddToFeedSuggest />
    </div>
  );
};

export default AddToFeed;
