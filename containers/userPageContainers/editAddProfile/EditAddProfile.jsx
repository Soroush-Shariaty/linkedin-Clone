import Link from "next/link";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import styles from "../../../styles/userPageStyles/editAddProfile.module.css";
const EditAddProfile = () => {
  return (
    <div className={styles.editAddProfile}>
      <div className={styles.editAddProfile__link_container}>
        <Link href="#">
          <a>Edit public profile & URL</a>
        </Link>
        <BsFillQuestionCircleFill />
      </div>
      <div className={styles.editAddProfile__link_container}>
        <Link href="#">
          <a>Add profile in another language</a>
        </Link>
        <BsFillQuestionCircleFill />
      </div>
    </div>
  );
};
export default EditAddProfile;
