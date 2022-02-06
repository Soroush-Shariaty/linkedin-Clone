import Link from "next/link";
import SuggestionTile from "../../../components/myNetworkPageComponents/suggestionTile/SuggestionTile";
import styles from "../../../styles/myNetworkPageStyles/youMayKnow.module.css";
const YouMayKnow = () => {
  let arr = [];
  for (let i = 0; i < 12; i++) {
    arr.push(<SuggestionTile />);
  }
  return (
    <div className={styles.youMayKnow}>
      <div className={styles.youMayKnow__header}>
        <p>Industry leaders you may know</p>
        <button>See all</button>
      </div>
      <div className={styles.youMayKnow__connectSuggestionTiles}>
        {arr.map((item) => item)}
      </div>
    </div>
  );
};

export default YouMayKnow;
