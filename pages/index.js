import React from "react";
import Navbar from "./../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "./../containers/bodyContainer/BodyContainer";
import { Sortby } from "../components/homePageComponents/index";
import {
  Profile,
  Recent,
  StartPost,
  Post,
  AddToFeed,
} from "../containers/homePageContainers/index";
import DreamJob from "../containers/homePageContainers/dreamJob/DreamJob";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <div>
          <Profile />
          <Recent />
        </div>
        <div>
          <StartPost />
          <Sortby />
          <Post />
        </div>
        <div>
          <AddToFeed />
          <DreamJob />
        </div>
      </BodyContainer>
    </div>
  );
};

export default HomePage;
