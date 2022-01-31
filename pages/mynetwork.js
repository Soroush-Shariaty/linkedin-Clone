import Navbar from "./../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "./../containers/bodyContainer/BodyContainer";
import { activeClass } from "./../utils/activeClassEnum";
import ManageNetwork from "../containers/myNetworkPageContainers/manageNetwork/ManageNetwork";

const MyNetworkPage = () => {
  return (
    <div>
      <Navbar active={activeClass.myNetwork} />
      <BodyContainer>
        <div>
          <ManageNetwork />
        </div>
        <div style={{ backgroundColor: "red", border: "1px solid black" }}>
          Soroush
        </div>
      </BodyContainer>
    </div>
  );
};

export default MyNetworkPage;
