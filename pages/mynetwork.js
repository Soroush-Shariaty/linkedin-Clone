import Navbar from "./../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "./../containers/bodyContainer/BodyContainer";
import { activeClass } from "./../utils/activeClassEnum";
import ManageNetwork from "../containers/myNetworkPageContainers/manageNetwork/ManageNetwork";
import PendingInvitations from "./../containers/myNetworkPageContainers/pendingInvitations/PendingInvitations";

const MyNetworkPage = () => {
  return (
    <div>
      <Navbar active={activeClass.myNetwork} />
      <BodyContainer>
        <div>
          <ManageNetwork />
        </div>
        <div>
          <PendingInvitations />
        </div>
      </BodyContainer>
    </div>
  );
};

export default MyNetworkPage;
