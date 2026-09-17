import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

import { imageSlide } from "../../common-functions/carousel-btn";
import ImgCarousel from "./img-carousel/Carousel";

import { FaHouseDamage } from "react-icons/fa";
import { PiMagnifyingGlass } from "react-icons/pi";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

import "./Header.css";

export default function Header() {
  const [index, setIndex] = useState(0);
  const length = 3;
  const { isAuthenticated } = useAuthContext();


  function handleSearchClick(event) {
    event.preventDefault();
  const searchInput = document.getElementById("search-input");

    searchInput.classList.toggle("search-input");
  }

  return (
    <>
      <div className="hero_area">
        <div className="brand_box">
          <Link className="navbar-brand" to="/">
            <span>Ninom</span>
          </Link>
        </div>

        <div className="slider_section position-relative">
          <div
            id="carouselExampleControls"
            className="carousel"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {<ImgCarousel index={ index }/>}
            </div>
            <a
              className="carousel-control-prev"
              href="#"
              role="button"
              data-slide="prev"
              onClick={() =>
                setIndex(imageSlide(length, index, "PREV"))
              }
            >
              <span className="next-icon"><GrFormPrevious /></span>
            </a>
            <a
              className="carousel-control-next"
              href="#"
              role="button"
              data-slide="next"
              onClick={() =>
                setIndex(imageSlide(length, index, "NEXT"))
              }
            >
              <span className="next-icon"><MdOutlineNavigateNext /></span>
            </a>
          </div>
        </div>
      </div>
      <div className="nav_section">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <FaHouseDamage />
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination">
                Destinations{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                 Contacts
              </Link>
            </li>
            { !isAuthenticated 
              ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
                ) 
                : ( 
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/create">
                      Create Destination
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li>
                </>)}
          </ul>
          <form action="" className="search-form">
            <button className="search-btn" onClick={(e) => handleSearchClick(e)}><PiMagnifyingGlass /></button>
            <input id="search-input" className="hide"/>
          </form>
        </nav>
      </div>
    </>
  );
};
