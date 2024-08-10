import styles from './InfoSection.module.css';

export function InfoSection() {

    return (
        <div className={styles["right-col"]}>
    <div className={styles["margin"]}>
        <div className={styles["container"]}>
          <h4>Popular Posts</h4>
        </div>
        <ul className={styles["ul-list"]}>
          <li className={styles["padding-16"]}>
            <img src="/w3images/avatar_smoke.jpg" alt="Image" className={styles[ "margin-right"]} style={{width:"50px"}} />
            <span className={styles["large"]}>Denim</span>
            <br/>
            <span>Sed mattis nunc</span>
          </li>
          <li className={styles["padding-16"]}>
            <img src="/w3images/bandmember.jpg" alt="Image" className={styles["margin-right"]} style={{width:"50px"}}/>
            <span className={styles["large"]}>Sweaters</span>
            <br/>
            <span>Praes tinci sed</span>
          </li>
          <li className={styles["padding-16"]}>
            <img src="/w3images/workshop.jpg" alt="Image" className={styles["margin-right"]} style={{width:"50px"}}/>
            <span className={styles["large"]}>Workshop</span>
            <br/>
            <span>Ultricies congue</span>
          </li>
          <li className={styles["padding-16"]}>
            <img src="/w3images/avatar_smoke.jpg" alt="Image" className={styles["margin-right", "sepia"]} style={{width:"50px"}}/>
            <span className={styles["large"]}>Trends</span>
            <br/>
            <span>Lorem ipsum dipsum</span>
          </li>
        </ul>
      </div>
        </div>
    )
}