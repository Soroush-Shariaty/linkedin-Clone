import { data } from "../../utils/data";
import Navbar from "./../../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "./../../containers/bodyContainer/BodyContainer";
import Showcase from "../../containers/userPageContainers/showcase/Showcase";
import SuggestedForYou from "../../containers/userPageContainers/suggestedForYou/SuggestedForYou";
import Analytics from "../../containers/userPageContainers/analytics/Analytics";
import Footer from "./../../containers/userPageContainers/footer/Footer";
import EditAddProfile from "./../../containers/userPageContainers/editAddProfile/EditAddProfile";
import { DreamJob } from "../../containers/indexPageContainers/index";
const UserPage = ({ user }) => {
  return (
    <div>
      <Navbar />
      <BodyContainer isMessagingPage={true}>
        <div>
          <Showcase user={user} />
          <SuggestedForYou />
          <Analytics />
          <Footer />
        </div>
        <div>
          <EditAddProfile />
          <DreamJob />
        </div>
      </BodyContainer>
    </div>
  );
};

export default UserPage;

export const getServerSideProps = ({ query: { id } }) => {
  const { users } = data;
  const user = users.find((item) => item.ID == id);
  return {
    props: { user },
  };
};
