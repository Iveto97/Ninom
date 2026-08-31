import { useLatestDestinations } from "../../hooks/useLatestDestinations";
import styles from "./LatestDestination.module.css";

import { PiAirplaneTiltThin } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

export default function LatestDestination() {
  const [latestDest] = useLatestDestinations();

  return (
    <article >
      <aside className={styles["latest-dest"]}>
        <div className={styles["container"]}>
          <h4>Latest Destinations</h4>
          <span className={styles["airplane-icon"]}><PiAirplaneTiltThin /></span>
        </div>
        <ul className={styles["ul-list"]}>
          {latestDest &&
            latestDest.map((dest) => (
              <li className={styles["padding-16"]} key={dest._id}>
                <span><FaLocationDot /></span>
                <p className={styles["large"]}>{dest.title}</p>
                
              </li>
            ))}
        </ul>
      </aside>
      </article>
  );
}
