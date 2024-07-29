import { useEffect, useState } from "react";
import styles from "./About.module.css"
import { get } from "../../utils/requester";

export default function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    (
      async() => {
        const request = await get('blog/about');
        setAbout(request)
      }
    )();
  }, []);

  return (
    <section className="about_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img-box">
              <img src="/images/Troyan Monastery.jpg" alt="" />
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
              <a href="">За контакти</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
