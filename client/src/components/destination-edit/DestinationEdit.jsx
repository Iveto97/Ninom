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
    { reinitializeForm: true },
  );

  return (
    <div id="edit-page" className={styles["edit-container"]}>
      <h1>Edit Destination</h1>
      <form id="edit" onSubmit={submitHandler} className={styles["edit-form"]}>
        <div className={styles["container"]}>
          <div className={styles["edit-icon-container"]}>
            <input
              type="text"
              id="title"
              name="title"
              onChange={changeHandler}
              value={values.title}
            />
          </div>

          <div className={styles["edit-icon-container"]}>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              onChange={changeHandler}
              value={values.imageUrl}
            />
          </div>

          <div className={styles["edit-icon-container"]}>
            <textarea
              name="details"
              id="details"
              onChange={changeHandler}
              value={values.details}
            ></textarea>
          </div>

          <input
            className={styles["edit-btn"]}
            type="submit"
            value="Edit Destination"
          />
        </div>
      </form>
    </div>
  );
}
