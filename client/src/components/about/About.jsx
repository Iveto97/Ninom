import { useGetInfo } from "../../hooks/useAbout";
import "./About.css";

import { Link } from "react-router-dom";

import { FaMapMarkedAlt } from "react-icons/fa";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { SlCompass } from "react-icons/sl";

export default function About() {
  const [about] = useGetInfo([]);

  return (
    <div className="row" key={about[0]?._id}>
      <div className="col-md-6 px-0">
        <img src={about.image} alt="" className="about-img" />
        <div className="about-img-box">
          <span className="map">
            <FaMapMarkedAlt />
          </span>
          <div className="map-text">
            <p>Discover Bulgaria.</p>
            <p>Create memories that last a lifetime.</p>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="detail-box">
          <div className="heading_container">
            <h2>{about.title}</h2>
          </div>
          <p>{about.info}</p>
          <div className="badges-container">
            <div className="mt">
              <span className="badge-icon">
                <HiMiniGlobeAlt />
              </span>
              <h4 className="badge-header">Explore</h4>
              <p className="badge-des">Find amazing places across Bulgaria.</p>
            </div>
            <div className="mt">
              <span className="badge-icon">
                <IoPeopleOutline />
              </span>
              <h4 className="badge-header">Connect</h4>
              <p className="badge-des">
                Build real connections and share experiences.
              </p>
            </div>
            <div className="mt">
              <span className="badge-icon">
                <SlCompass />
              </span>
              <h4 className="badge-header">Experience</h4>
              <p className="badge-des">
                Live authentic moments you'll never forget.
              </p>
            </div>
          </div>
          <Link to="/contact">Contacts</Link>
        </div>
      </div>
    </div>
  );
}
