import Link from "next/link";
import styles from "../../../styles/navbarStyles/setLanguageDropdown.module.css";
import onClickOutside from "react-onclickoutside";
import { useState } from "react";
import Gb from "../../../public/images/flags/gb.svg";
import Fr from "../../../public/images/flags/fr.svg";
import i18next from "i18next";

function SetLanguageDropdown({ isOpen, setIsOpen }) {
  SetLanguageDropdown.handleClickOutside = () => setIsOpen(false);
  const [forceUpdate, setForceUpdate] = useState(1);
  return (
    <div
      className={styles.setLanguageDropdown}
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <button
        className={styles.setLanguageDropdown__button}
        onClick={() => i18next.changeLanguage("en")}
      >
        <p>English</p>
        <img src="/images/flags/gb.svg" alt="" />
      </button>
      <button
        className={styles.setLanguageDropdown__button}
        onClick={() => i18next.changeLanguage("fr")}
      >
        <p>Français</p>
        <img src="/images/flags/fr.svg" alt="" />
      </button>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SetLanguageDropdown.handleClickOutside,
};

export default onClickOutside(SetLanguageDropdown, clickOutsideConfig);
