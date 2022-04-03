import Navbar from "./../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "./../containers/bodyContainer/BodyContainer";
import { activeClass } from "./../utils/activeClassEnum";
import ManageNetwork from "../containers/myNetworkPageContainers/manageNetwork/ManageNetwork";
import PendingInvitations from "./../containers/myNetworkPageContainers/pendingInvitations/PendingInvitations";
import YouMayKnow from "../containers/myNetworkPageContainers/youMayKnow/YouMayKnow";
import { data } from "../utils/data";

const MyNetworkPage = ({ users }) => {
  return (
    <div>
      <Navbar active={activeClass.myNetwork} />
      <BodyContainer>
        <div>
          <ManageNetwork />
        </div>
        <div>
          <PendingInvitations />
          <YouMayKnow users={users} />
        </div>
      </BodyContainer>
    </div>
  );
};

export default MyNetworkPage;

export const getStaticProps = () => {
  const { users } = data;
  return {
    props: {
      users,
    },
  };
};
