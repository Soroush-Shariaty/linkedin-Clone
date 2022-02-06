import Link from "next/link";
import styles from "../../../styles/myNetworkPageStyles/pendingInvitations.module.css";

const PendingInvitations = () => {
  return (
    <div className={styles.pendingInvitations}>
      <p>No pending Invitations</p>
      <div>
        <Link href="#" passHref>
          <a>Manage</a>
        </Link>
      </div>
    </div>
  );
};

export default PendingInvitations;
