import { createContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { get, post } from "../../api/requester";

import DestinationDetailsList from "./destination-details-list/DestinationDetailsList";

import styles from "./DestinationDetails.module.css";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import useForm from "../../hooks/useForm";
import { useAuthContext } from "../../context/authContext";
import { useGetAllDestinations, useGetOneDestination } from "../../hooks/useDestinations";

const initialValues = {
  comment: "",
};

export default function DestinationDetails() {
  const { destinationId } = useParams();
  const [ comments, dispatch ] = useGetAllComments(destinationId);
  const createComment = useCreateComment();

  const [currentIndex, setCurrentIndex] = useState(0);
  const { email, userId, isAuthenticated } = useAuthContext();

  const [ destination ] = useGetOneDestination(destinationId)
  
  const commentCreator = async ({ comment }) => {
    try {
      const newComment = await createComment(destinationId, comment);

      dispatch({ type: 'ADD_COMMENT', payload: {...newComment, author: { email }}});

    } catch (error) {
      console.log(error.message);
    }
  }
  const { changeHandler, submitHandler, values } = useForm(initialValues, commentCreator);
  
  let length = 0;
  if(destination.img) {
    length = Object.values(destination.img).length;
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
    <section id="game-details">
      <div className={styles["info-section"]}>
        <div className={styles["game-header"]}>
      {/* <h1>{destination.title}</h1> */}
      <p>{destination.details}</p>

      <div className={styles["slideshow-container"]}>
        <div className={styles[("mySlides", "fade")]}>
          <div className={styles["numbertext"]}>
            {currentIndex + 1} / {length}
          </div>
          <img src={destination.img && destination.img.length > 0 ? destination.img[currentIndex] : ''} style={{ width: 1000 }} />
        </div>
        <a className={styles["prev"]} onClick={clickHandlePrev}>
          &#10094;
        </a>
        <a className={styles["next"]} onClick={clickHandleNext}>
          &#10095;
        </a>
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
        
        </div>
       
        <div className={styles["details-comments"]}>
          <h2>Comments:</h2>
          <ul>
            {
              comments.map(comment => (
                <li key={comment._id} className={styles["comment"]}>
                  <p>
                    {comment._ownerId}: {comment.text}
                  </p>
                </li>
              ))}
          </ul>
          {comments.length === 0 &&
            <p className={styles["no-comment"]}>No comments.</p>
         }
        </div>

      <article className={styles["create-comment"]}>
        <label>Коментар:</label>
        <form className={styles["form"]} >
          <input
            type="text"
            placeholder="Pesho"
            name="username"
            // onChange={(e) => setUsername(e.target.value)}
            // value={username}
          />
          <textarea
            name="comment"
            placeholder="Comment......"
            // onChange={(e) => setComment(e.target.value)}
            // value={comment}
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
