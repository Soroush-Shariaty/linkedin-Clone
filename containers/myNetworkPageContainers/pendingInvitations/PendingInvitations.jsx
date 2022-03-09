import Link from "next/link";
import styles from "../../../styles/myNetworkPageStyles/pendingInvitations.module.css";
import { useTranslation } from "react-i18next";

const PendingInvitations = () => {
  const { t } = useTranslation(["mynetwork"]);
  return (
    <div className={styles.pendingInvitations}>
      <p>{t("no_pending_invitations")}</p>
      <div>
        <Link href="#" passHref>
          <a>{t("manage")}</a>
        </Link>
      </div>
    </div>
  );
};

export default PendingInvitations;
