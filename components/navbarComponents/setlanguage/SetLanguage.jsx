import { AiOutlineGlobal } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import SetLanguageDropdown from "./SetLanguageDropdown";
import styles from "../../../styles/navbarStyles/setLanguage.module.css";
import { useState } from "react";

const SetLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.setLanguage} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineGlobal />
        <BiChevronDown />
      </div>
      <SetLanguageDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default SetLanguage;
