import React from "react";
import Navbar from "./../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "./../containers/bodyContainer/BodyContainer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <div style={{ backgroundColor: "red", border: "1px solid black" }}>
          Soroush
        </div>
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
