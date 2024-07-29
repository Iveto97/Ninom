import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [index, setIndex] = useState(0);
  const length = 3;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <>
      <div className="hero_area">
        <div className="brand_box">
          <Link className="navbar-brand" to="/">
            <span>Ninom</span>
          </Link>
        </div>

        <section className=" slider_section position-relative">
          <div
            id="carouselExampleControls"
            className="carousel slide "
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {carousel(index)}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
              onClick={handlePrevious}
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
              onClick={handleNext}
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>

      <section className="nav_section">
        <div className="container">
          <div className="custom_nav2">
            <nav className="navbar navbar-expand custom_nav-container ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex  flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Начало <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        Относно{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/destination">
                        Дестинации{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/feedback">
                        Testimonial
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Контакти
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    ></button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

function carousel(index) {
  let img = "";
  if (index === 0) {
    img = "./images/Vratsa.jpg";
  } else if (index === 1) {
    img = "./images/Troyan Monastery.jpg";
  } else {
    img = "./images/AladzhaMonastery.jpg";
  }

  return (
    <div className="carousel-item active">
      <div className="img-box">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
