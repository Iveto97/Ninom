import { FaArrowRightLong } from "react-icons/fa6";

import "./Content.css";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="content-container">
      <div className="content-box">
        <div className="detail-box">
          <h2>Real experiences.</h2>
          <h2>Real connections.</h2>
          <h2>Real travel.</h2>
          <hr className="line" />
          <p>
            Dive into different cultures. Eat your heart out. Make new besties.
            Make a difference. Live your best life. We're travel pros who
            specialise in group tours for 18-40s. We're all about authentic,
            responsible and life changing experiences.
          </p>
        </div>
        <div className="content-img-box">
          <img src="images/bulgaria-tours.png" alt="" />
        </div>
        <div className="btn-box">
          <Link href="/destination">
            Explore Destinations{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
