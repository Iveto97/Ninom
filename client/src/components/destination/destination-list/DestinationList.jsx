import { Link } from "react-router-dom";
import styles from "./DestinationList.module.css";

export default function DestinationList({ imageUrl, title, _id }) {

  return (
    <div className={styles["box"]}>
      <img src={imageUrl[0]} alt="" />
      <div className={styles["link_box"]}>
        <h5>{title}</h5>
        <Link to={`/destination/${_id}/details`}>More</Link>
      </div>
    </div>
  );
}
