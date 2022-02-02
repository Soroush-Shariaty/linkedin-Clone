import styles from "../../../styles/navbarStyles/toggleDarkmode.module.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ToggleDarkmode = () => {
  let matched = false;
  useEffect(() => {
    matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (matched) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  const { theme, setTheme } = useTheme();
  //check if system darkmode is enabled.
  const [toggle, setToggle] = useState(matched);
  const triggerToggle = () => {
    setToggle(!toggle);
    if (!toggle) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div
      className={
        toggle
          ? [styles.toggleDarkmode, styles.toggleDarkmode_checked].join(" ")
          : styles.toggleDarkmode
      }
      onClick={triggerToggle}
    >
      <div className={styles.toggleDarkmode__container}>
        <div className={styles.toggleDarkmode__toggle_check}>
          <span>
            <BsFillMoonFill />
          </span>
        </div>
        <div className={styles.toggleDarkmode__toggle_uncheck}>
          <span>
            <BsFillSunFill />
          </span>
        </div>
      </div>
      <div className={styles.toggleDarkmode__toggle_circle}></div>
      <input
        className={styles.toggleDarkmode__toggle_input}
        type="checkbox"
        aria-label="Toggle Button"
      />
    </div>
  );
};

export default ToggleDarkmode;
