import { useTranslation } from "react-i18next";
import { BiChevronDown } from "react-icons/bi";
import styles from "../../../styles/indexPageStyles/sortbyButton.module.css";
import { useState } from "react";
import SortbyDropdown from "./SortbyDropdown";

const SortbyButton = () => {
  const { t } = useTranslation(["feed"]);
  const [isOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState("Recent");
  return (
    <div className={styles.sortbyButton} onClick={() => setIsOpen(!isOpen)}>
      <p>{choice}</p>
      <BiChevronDown />
      <SortbyDropdown
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        choice={choice}
        setChoice={setChoice}
      />
    </div>
  );
};

export default SortbyButton;
