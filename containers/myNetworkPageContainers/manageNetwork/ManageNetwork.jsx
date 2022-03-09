import ManageNetworkOptionContainer from "./../manageNetworkOptionContainer/ManageNetworkOptionContainer";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "../../../styles/myNetworkPageStyles/manageNetwork.module.css";
import img from "../../../public/images/dreamJob.jpg";
const ManageNetwork = () => {
  const { t } = useTranslation(["mynetwork"]);
  return (
    <div className={styles.manageNetwork}>
      <p>{t("manage_my_network")}</p>
      <div className={styles.manageNetwork__options_container}>
        <ManageNetworkOptionContainer />
      </div>
      <div className={styles.manageNetwork__image_container}>
        <Image layout="responsive" src={img} alt="" />
      </div>
      <div className={styles.manageNetwork__addContact_container}>
        <p>{t("add_personal_contacts")}</p>
        <p>
          {t("Well_periodically_import_and_store_etc")}
          <a className={styles.manageNetwork__addContact_container_learn_more}>
            {t("learn_more")}
          </a>
        </p>
        <div className={styles.manageNetwork__input_container}>
          <input type="text" />
        </div>
        <button>{t("continue")}</button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="" passHref>
            <a className={styles.manageNetwork__addContact_container_link}>
              {t("more_options")}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageNetwork;
