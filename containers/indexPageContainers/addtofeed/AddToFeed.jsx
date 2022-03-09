import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { AddToFeedSuggest } from "../../../components/indexPageComponents/index";

import styles from "../../../styles/indexPageStyles/addToFeed.module.css";

const AddToFeed = ({ users }) => {
  const { t } = useTranslation(["feed"]);
  return (
    <div className={styles.addtofeed}>
      <h4 className={styles.addtofeed__title}>{t("add_to_your_feed")}</h4>
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
            <span>{t("view_all_recommendations")}</span>
            <FaArrowRight />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default AddToFeed;
