import "./Info.css";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Info() {
  return (
    <section className="info_section layout_padding">
      <div className="container">
        <div className="info_logo">
          <h2>NiNom</h2>
        </div>
        <div className="info_contact">
          <div className="row">
            <div className="col-md-4">
              <a href="#">
                <span className="info-icon">
                  <IoLocationSharp />
                </span>
                Passages of Lorem Ipsum available
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <span className="info-icon">
                  <FaPhone />
                </span>
                Call : +012334567890
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <span className="info-icon">
                  <MdMarkEmailUnread />
                </span>
                ninom@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="info_form">
              <form action="">
                <input type="text" placeholder="Enter your email" />
                <button>subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="info_social">
              <div>
                <a href="#">
                  <span>
                    <FaFacebook />
                  </span>
                </a>
              </div>
              <div>
                <a href="#">
                  <span>
                    <AiFillTwitterCircle />
                  </span>
                </a>
              </div>
              <div>
                <a href="#">
                  <span>
                    <IoLogoInstagram />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
