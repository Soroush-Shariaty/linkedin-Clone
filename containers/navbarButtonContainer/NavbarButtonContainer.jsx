import styles from "./../../styles/navbarButtonContainer.module.css";
import NavbarButton from "./../../components/navbarbutton/NavbarButton";
import {
  AiFillHome,
  AiFillMessage,
  AiFillBell,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsPeopleFill, BsThreeDots } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import NavbarUser from "../../components/navbarUser/NavbarUser";
import NavbarWork from "../../components/navbarWork/NavbarWork";

const NavbarButtonContainer = () => {
  return (
    <div className={styles.navbarButtonContainer}>
      <NavbarButton title="Search" isActive={false}>
        <AiOutlineSearch />
      </NavbarButton>
      <NavbarButton title="Home" isActive={true}>
        <AiFillHome />
      </NavbarButton>
      <NavbarButton title="My Network" isActive={false}>
        <BsPeopleFill />
      </NavbarButton>
      <NavbarButton title="Jobs" isActive={false}>
        <IoMdBriefcase />
      </NavbarButton>
      <NavbarButton title="Message" isActive={false}>
        <AiFillMessage />
      </NavbarButton>
      <NavbarButton title="Notification" isActive={false}>
        <AiFillBell />
      </NavbarButton>
      <NavbarUser />
      <NavbarWork />
      <NavbarButton title="" isActive={false}>
        <BsThreeDots />
      </NavbarButton>
    </div>
  );
};

export default NavbarButtonContainer;
