import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { AddToFeedSuggest } from "./../../../components/homePageComponents/index";
import styles from "../../../styles/homePageStyles/addToFeed.module.css";

const AddToFeed = ({ users }) => {
  return (
    <div className={styles.addtofeed}>
      <h4 className={styles.addtofeed__title}>Add to your feed</h4>
      {users.map((item) => (
        <AddToFeedSuggest
          key={item.ID}
          image={item.profilePhoto}
          name={item.name}
          description={item.description}
        />
      ))}
      <Link href="#" passHref>
        <a className={styles.addtofeed__recommLink}>
          <div className={styles.addtofeed__recommLink_container}>
            <span>View all recommendations</span>
            <FaArrowRight />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default AddToFeed;
