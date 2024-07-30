import { useEffect, useState } from "react";
import styles from "./DestinationDetailsList.module.css";

export default function DestinationDetailsList({ destinationDetails }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const details = destinationDetails[0];
  const img = destinationDetails[1]

  let length = 0;
  if (img) {
    length = Object.values(img).length;
  }

  const clickHandlePrev = (e) => {
    e.preventDefault();
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const clickHandleNext = (e) => {
    e.preventDefault();
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className={styles["game-header"]}>
      {/* <h1>{destination.title}</h1> */}
      <p>{details}</p>

      <div className={styles["slideshow-container"]}>
        <div className={styles[("mySlides", "fade")]}>
          <div className={styles["numbertext"]}>
            {currentIndex + 1} / {length}
          </div>
          <img src={img && img.length > 0 ? img[currentIndex] : ''} style={{ width: 1000 }} />
        </div>
        <a className={styles["prev"]} onClick={clickHandlePrev}>
          &#10094;
        </a>
        <a className={styles["next"]} onClick={clickHandleNext}>
          &#10095;
        </a>
      </div>
    </div>
  );
}
