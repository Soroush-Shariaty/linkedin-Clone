import { data } from "../../utils/data";
import Navbar from "./../../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "./../../containers/bodyContainer/BodyContainer";
import Showcase from "../../containers/userPageContainers/showcase/Showcase";
import SuggestedForYou from "../../containers/userPageContainers/suggestedForYou/SuggestedForYou";

const UserPage = ({ user }) => {
  return (
    <div>
      <Navbar />
      <BodyContainer isMessagingPage={true}>
        <div>
          <Showcase user={user} />
          <SuggestedForYou />
        </div>
        <div style={{ backgroundColor: "red" }}>Soroush</div>
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
