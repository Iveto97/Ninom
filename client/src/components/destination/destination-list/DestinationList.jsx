import { Link } from "react-router-dom";

import  "./DestinationList.css";

export default function DestinationList({ imageUrl, title, _id }) {
  return (
    <div className="box">
      <img src={imageUrl[0]} alt="" />
      <div className="link_box">
        <h5>{title}</h5>
        <Link to={`/destination/${_id}/details`}>More</Link>
      </div>
    </div>
  );
}
