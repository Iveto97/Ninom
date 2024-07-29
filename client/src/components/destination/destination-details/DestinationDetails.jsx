import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { get, post } from "../../../utils/requester";

import DestinationDetailsList from "./destination-details-list/DestinationDetailsList";

import styles from "./DestinationDetails.module.css";

export default function DestinationDetails() {
  const [destinationDetails, setDestinationDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");

  const location = useLocation();
  const { articleId } = useParams();
  const path = location.pathname.split("/");

  useEffect(() => {
    (async () => {
      const request = await get(`blog/destinations/${path[2]}/more`);
      const result = Object.values(request);
      setDestinationDetails(result);

      // const requestCom = await get(`blog/destinations/${path[2]}/comments`);
      // const resultCom = Object.values(requestCom);
      // setComments(resultCom);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const requestCom = await get(`blog/destinations/${path[2]}/comments`);
      const resultCom = Object.values(requestCom);
      setComments(resultCom);
    })();
  }, []);

  const commentSubmitHandler = async (e) => {
    e.preventDefault();

    const data = {
      articleId,
      username,
      comment,
    };

    const newComment = await post(
      `blog/destinations/${path[2]}/comments`,
      data
    );

    setComments((prevState) => ({
      ...prevState,
      newComment,
    }));

    setComment("");
    setUsername("");
  };
  return (
    <section id="game-details">
      <div className={styles["info-section"]}>
        <div className={styles["game-header"]}>
          {
            <DestinationDetailsList
            destinationDetails={destinationDetails}
            />
          }
        </div>
        
        <div className={styles["details-comments"]}>
          <h2>Коментари:</h2>
          <ul>
            {comments &&
              Object.values(comments).map((comment) => (
                <li key={comment._id} className={styles["comment"]}>
                  <p>
                    {comment.username}: {comment.comment}
                  </p>
                </li>
              ))}
          </ul>
          {Object.keys(comments || {}).length === 0 ? (
            <p className={styles["no-comment"]}>No comments.</p>
          ) : (
            ""
          )}
        </div>
        <div className={styles["buttons"]}>
          <a href="#" className={styles["buttons"]}>
            Edit
          </a>
          <a href="#" className={styles["buttons"]}>
            Delete
          </a>
        </div>
      </div>
      <article className={styles["create-comment"]}>
        <label>Коментар:</label>
        <form className={styles["form"]} onSubmit={commentSubmitHandler}>
          <input
            type="text"
            placeholder="Pesho"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <input
            className={styles[("btn", "submit")]}
            type="submit"
            value="Add Comment"
          />
        </form>
      </article>
    </section>
  );
}
