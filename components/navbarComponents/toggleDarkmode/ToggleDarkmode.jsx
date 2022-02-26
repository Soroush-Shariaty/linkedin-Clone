import { useTheme } from "next-themes";
import { useSelector, useDispatch } from "react-redux";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import {
  setThemeDark,
  setThemeLight,
} from "../../../redux/actions/darkmodeActions";
import styles from "../../../styles/navbarStyles/toggleDarkmode.module.css";

const ToggleDarkmode = () => {
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const darkmodeState = useSelector((state) => state.darkmode);
  const triggerToggle = () => {
    if (darkmodeState.darkmode) {
      dispatch(setThemeLight());
      setTheme("light");
    } else {
      dispatch(setThemeDark());
      setTheme("dark");
    }
  };
  return (
    <div
      className={
        !darkmodeState.darkmode
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
