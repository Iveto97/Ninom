import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import useForm from "../../hooks/useForm";
import { useGetOneDestination } from "../../hooks/useDestinations";

import { deleteDest } from "../../api/dest-api";

import DestinationLikes from "../destination-likes/DestinationLikes";
import Modal from "../common/modal/Modal";

import styles from "./DestinationDetails.module.css";
import { imageSlide } from "../../common-functions/carousel-btn";

const initialValues = {
  comment: "",
};

export default function DestinationDetails() {
  const navigate = useNavigate();
  const createComment = useCreateComment();

  const { email, userId, isAuthenticated } = useAuthContext();

  const { destinationId } = useParams();
  const [comments, dispatch] = useGetAllComments(destinationId);
  const [destination] = useGetOneDestination(destinationId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const commentCreator = async ({ comment }) => {
    try {
      const newComment = await createComment(destinationId, comment);

      dispatch({
        type: "ADD_COMMENT",
        payload: { ...newComment, author: { email } },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const { changeHandler, submitHandler, values } = useForm(
    initialValues,
    commentCreator
  );

  let length = 0;
  if (destination.imageUrl) {
    length = Object.values(destination.imageUrl).length;
  }

  const isCreator = userId === destination._ownerId;

  const destDeleteHandler = async (e) => {
    e.preventDefault();
    setConfirmMessage([
      `Delete article`,
      `Are you sure you want to delete ${destination.title}?`,
    ]);
    setIsOpen(true);
  };

  if (isConfirmed) {
    (async () => {
      try {
        await deleteDest(destinationId);
        setIsConfirmed(false);
        navigate("/destination");
      } catch (error) {
        console.log(error.message);
      }
    })();
  }

  return (
    <section id="game-details">
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          setIsConfirmed={setIsConfirmed}
          message={confirmMessage}
        />
      )}
      <div className={styles["details-section"]}>
        <div className={styles["game-header"]}>
          <h1>{destination.title}</h1>
          <p>{destination.details}</p>

          <div className={styles["slideshow-container"]}>
            <div className={styles[("mySlides", "fade")]}>
              <div className={styles["numbertext"]}>
                {currentIndex + 1} / {length}
              </div>
              <img
                src={
                  destination.imageUrl && destination.imageUrl.length > 0
                    ? destination.imageUrl[currentIndex]
                    : ""
                }
                style={{ width: "862px", height: "500px" }}
              />
            </div>
            <a
              className={styles["prev"]}
              onClick={() =>
                setCurrentIndex(imageSlide(length, currentIndex, "PREV"))
              }
            >
              &#10094;
            </a>
            <a
              className={styles["next"]}
              onClick={() =>
                setCurrentIndex(imageSlide(length, currentIndex, "NEXT"))
              }
            >
              &#10095;
            </a>
          </div>
          <div className={styles["buttons"]}>
            {isAuthenticated && (
              <DestinationLikes destinationId={destinationId} />
            )}

            {isCreator && (
              <>
                <Link
                  to={`/destination/${destinationId}/edit`}
                  className={styles["buttons"]}
                >
                  Edit
                </Link>
                <a
                  href="#"
                  className={styles["buttons"]}
                  onClick={destDeleteHandler}
                >
                  Delete
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles["details-comments"]}>
        <h2>Comments:</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id} className={styles["comment"]}>
              <p>
                {comment.author.email}: {comment.text}
              </p>
            </li>
          ))}
        </ul>
        {comments.length === 0 && (
          <p className={styles["no-comment"]}>No comments.</p>
        )}
      </div>

      {isAuthenticated && (
        <article className={styles["create-comment"]}>
          <label>Comments:</label>
          <form className={styles["form"]} onSubmit={submitHandler}>
            <textarea
              name="comment"
              placeholder="Comment......"
              onChange={changeHandler}
              value={values.comment}
            ></textarea>
            <input
              className={styles[("btn", "submit")]}
              type="submit"
              value="Add Comment"
            />
          </form>
        </article>
      )}
    </section>
  );
}
