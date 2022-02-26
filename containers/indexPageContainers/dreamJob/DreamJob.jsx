import Image from "next/image";
import dreamJob from "../../../public/images/dreamJob.jpg";

import styles from "./../../../styles/indexPageStyles/dreamJob.module.css";

const DreamJob = () => {
  return (
    <div className={styles.dreamJob}>
      <Image src={dreamJob} alt="" />
    </div>
  );
};

export default DreamJob;
