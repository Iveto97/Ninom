import { useLatestDestinations } from "../../hooks/useLatestDestinations";
import styles from "./LatestDestination.module.css";

export default function LatestDestination() {
  const [latestDest] = useLatestDestinations();

  return (
    <div className={styles["right-col"]}>
      <div className={styles["margin"]}>
        <div className={styles["container"]}>
          <h4>Latest Destinations</h4>
        </div>
        <ul className={styles["ul-list"]}>
          {latestDest &&
            latestDest.map((dest) => (
              <li className={styles["padding-16"]} key={dest._id}>
                <img
                  src="/images/globe.png"
                  alt="Image"
                  className={styles["margin-right"]}
                  style={{ width: "50px" }}
                />
                <span className={styles["large"]}>{dest.title}</span>
                <br />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
