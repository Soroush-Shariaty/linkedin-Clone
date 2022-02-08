import BodyContainer from "../containers/bodyContainer/BodyContainer";
import { Navbar } from "../containers/navbarContainers/index";
import { activeClass } from "./../utils/activeClassEnum";
import { ChatSystem } from "../containers/messagingPageContainers/index";

const messaging = () => {
  return (
    <div>
      <Navbar active={activeClass.messaging} />
      <BodyContainer isMessagingPage={true}>
        <div>
          <ChatSystem />
        </div>
        <div style={{ backgroundColor: "red" }}>Soroush</div>
      </BodyContainer>
    </div>
  );
};

export default messaging;
