import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation(["feed"]);
  return (
    <div className={styles.navbarButtonContainer}>
      <NavbarButton title="Search" isActive={false} href="/mynetwork">
        <AiOutlineSearch />
      </NavbarButton>
      <NavbarButton
        title={t("home")}
        isActive={active === activeClass.home ? true : false}
        href="/"
      >
        <AiFillHome />
      </NavbarButton>
      <NavbarButton
        title={t("my_network")}
        isActive={active === activeClass.myNetwork ? true : false}
        href="/mynetwork"
      >
        <BsPeopleFill />
      </NavbarButton>
      <NavbarButton title={t("jobs")} isActive={false} href="/">
        <IoMdBriefcase />
      </NavbarButton>
      <NavbarButton
        title={t("messaging")}
        isActive={active === activeClass.messaging ? true : false}
        href="/"
      >
        <AiFillMessage />
      </NavbarButton>
      <NavbarButton title={t("notifications")} isActive={false} href="/">
        <AiFillBell />
      </NavbarButton>
      <NavbarUser />
      <NavbarWork />
      <NavbarButton title="" isActive={false} href="/">
        <BsThreeDots />
      </NavbarButton>
    </div>
  );
};

export default NavbarButtonContainer;
