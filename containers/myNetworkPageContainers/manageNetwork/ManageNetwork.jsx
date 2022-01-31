import ManageNetworkOptionContainer from "./../manageNetworkOptionContainer/ManageNetworkOptionContainer";
import Image from "next/image";
import styles from "../../../styles/myNetworkPageStyles/manageNetwork.module.css";
import img from "../../../public/images/dreamJob.jpg";
import Link from "next/link";
const ManageNetwork = () => {
  return (
    <div className={styles.manageNetwork}>
      <p>Manage my network</p>
      <div className={styles.manageNetwork__options_container}>
        <ManageNetworkOptionContainer />
      </div>
      <div className={styles.manageNetwork__image_container}>
        <Image layout="responsive" src={img} alt="" />
      </div>
      <div className={styles.manageNetwork__addContact_container}>
        <p>Add personal contacts</p>
        <p>
          We’ll periodically import and store your contacts to help you and
          others connect. You choose who to connect to and who to invite.
          <a className={styles.manageNetwork__addContact_container_learn_more}>
            Learn more
          </a>
        </p>
        <div className={styles.manageNetwork__input_container}>
          <input type="text" />
        </div>
        <button>Continue</button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="" passHref>
            <a className={styles.manageNetwork__addContact_container_link}>
              More options
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageNetwork;
