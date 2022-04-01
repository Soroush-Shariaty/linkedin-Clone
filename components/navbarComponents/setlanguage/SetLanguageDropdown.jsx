import Link from "next/link";
import styles from "../../../styles/navbarStyles/setLanguageDropdown.module.css";
import onClickOutside from "react-onclickoutside";
import { useState } from "react";
import i18next from "i18next";

function SetLanguageDropdown({ isOpen, setIsOpen }) {
  SetLanguageDropdown.handleClickOutside = () => setIsOpen(false);
  return (
    <div
      className={styles.setLanguageDropdown}
      style={{
        opacity: isOpen ? "1" : "0",
        visibility: isOpen ? "visible" : "hidden",
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
