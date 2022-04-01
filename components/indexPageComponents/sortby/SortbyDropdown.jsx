import styles from "../../../styles/indexPageStyles/sortbyDropdown.module.css";
import onClickOutside from "react-onclickoutside";
import { useState } from "react";
import i18next from "i18next";

function SortbyDropdown({ isOpen, setIsOpen, setChoice, choice }) {
  SortbyDropdown.handleClickOutside = () => setIsOpen(false);
  return (
    <div
      className={styles.sortbyDropdown}
      style={{
        opacity: isOpen ? "1" : "0",
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <button
        className={styles.sortbyDropdown__button}
        onClick={() => setChoice("Top")}
        style={{
          borderLeft: `${
            choice === "Top" ? "2px solid green" : "2px solid transparent"
          }`,
        }}
      >
        <p>Top</p>
      </button>
      <button
        className={styles.sortbyDropdown__button}
        onClick={() => setChoice("Recent")}
        style={{
          borderLeft: `${
            choice === "Recent" ? "2px solid green" : "2px solid transparent"
          }`,
        }}
      >
        <p>Recent</p>
      </button>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SortbyDropdown.handleClickOutside,
};

export default onClickOutside(SortbyDropdown, clickOutsideConfig);
