import styles from "./PopularPosts.module.css";
import { usePopularPosts } from "../../hooks/usePopularPosts";

export default function PopularPosts() {
  const sortable = usePopularPosts();

  return (
    <div className={styles["right-col"]}>
      <div className={styles["margin"]}>
        <div className={styles["container"]}>
          <h4>Top 3 Popular Posts</h4>
        </div>
        <ul className={styles["ul-list"]}>
          {sortable &&
            sortable.map((sort) => (
              <li className={styles["padding-16"]} key={sort[0]}>
                <img
                  src="/images/globe.png"
                  alt="Image"
                  className={styles["margin-right"]}
                  style={{ width: "50px" }}
                />
                <span className={styles["large"]}>{sort[0]}</span>
                <br />
                <div className={styles["total-star"]}>
                  {[...Array(sort[1] <= 5 ? sort[1] : 5)].map((star, index) => {
                    return (
                      <label key={index}>
                        <input type="radio" name="rating" />
                        <span
                          className={styles["star"]}
                          style={{
                            color: "#ffc107",
                          }}
                        >
                          &#9733;
                        </span>
                      </label>
                    );
                  })}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
