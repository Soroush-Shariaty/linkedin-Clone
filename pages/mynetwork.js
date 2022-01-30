import Navbar from "./../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "./../containers/bodyContainer/BodyContainer";
import { activeClass } from "./../utils/activeClassEnum";

const HomePage = () => {
  return (
    <div>
      <Navbar active={activeClass.myNetwork} />
      <BodyContainer>
        <div style={{ backgroundColor: "red", border: "1px solid black" }}>
          Soroush
        </div>
        <div style={{ backgroundColor: "red", border: "1px solid black" }}>
          Soroush
        </div>
      </BodyContainer>
    </div>
  );
};

export default HomePage;
