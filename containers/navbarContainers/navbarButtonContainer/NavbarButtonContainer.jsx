import {
  AiFillHome,
  AiFillMessage,
  AiFillBell,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsPeopleFill, BsThreeDots } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import {
  NavbarButton,
  NavbarUser,
  NavbarWork,
} from "../../../components/navbarComponents/index";
import styles from "./../../../styles/navbarStyles/navbarButtonContainer.module.css";
import { activeClass } from "./../../../utils/activeClassEnum";

const NavbarButtonContainer = ({ active }) => {
  return (
    <div className={styles.navbarButtonContainer}>
      <NavbarButton title="Search" isActive={false} href="/mynetwork">
        <AiOutlineSearch />
      </NavbarButton>
      <NavbarButton
        title="Home"
        isActive={active === activeClass.home ? true : false}
        href="/"
      >
        <AiFillHome />
      </NavbarButton>
      <NavbarButton
        title="My Network"
        isActive={active === activeClass.myNetwork ? true : false}
        href="/mynetwork"
      >
        <BsPeopleFill />
      </NavbarButton>
      <NavbarButton title="Jobs" isActive={false} href="/mynetwork">
        <IoMdBriefcase />
      </NavbarButton>
      <NavbarButton
        title="Messaging"
        isActive={active === activeClass.messaging ? true : false}
        href="/messaging"
      >
        <AiFillMessage />
      </NavbarButton>
      <NavbarButton title="Notification" isActive={false} href="/mynetwork">
        <AiFillBell />
      </NavbarButton>
      <NavbarUser />
      <NavbarWork />
      <NavbarButton title="" isActive={false} href="/mynetwork">
        <BsThreeDots />
      </NavbarButton>
    </div>
  );
};

export default NavbarButtonContainer;
