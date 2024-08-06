import { useGetInfo } from "../../hooks/useAbout";
import styles from "./About.module.css"

import { Link } from "react-router-dom";

export default function About() {
  const [ about ] = useGetInfo([]);  

  return (
    <section className="about_section" key={about[0]?._id}>
      <div className="container-fluid" >
          <div className="row" >
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src={about.image} alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <hr />
                  <h2>{about.title}</h2>
                </div>
                <p>
                  {about.info}
                </p>
                <Link to="/contact">Contacts</Link>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
