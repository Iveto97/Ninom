import { useNavigate, useParams } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useGetOneDestination } from "../../hooks/useDestinations";

import { updateDest } from "../../api/dest-api";

import styles from "../destination-edit/DestinationEdit.module.css";

export default function DestinationEdit() {
  const navigate = useNavigate();
  const { destinationId } = useParams();
  const [dest] = useGetOneDestination(destinationId);

  const { changeHandler, submitHandler, values } = useForm(
    dest,
    async (values) => {
      const updatedDest = await updateDest(destinationId, values);
      navigate(`/destination/${destinationId}/details`);
    },
    { reinitializeForm: true }
  );

  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={submitHandler}>
        <div className={styles["container"]}>
          <h1>Edit Destination</h1>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={changeHandler}
            value={values.title}
          />{" "}
          {/*values.title || ''*/}
          <label htmlFor="game-img /">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={changeHandler}
            value={values.imageUrl}
          />
          <label htmlFor="details">Details:</label>
          <textarea
            name="details"
            id="details"
            onChange={changeHandler}
            value={values.details}
          ></textarea>
          <input
            className={styles["edit-btn"]}
            type="submit"
            value="Edit Destination"
          />
        </div>
      </form>
    </section>
  );
}
