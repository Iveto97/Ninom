import { useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";

import { createDest } from "../../api/dest-api";

import styles from "./CreateDestination.module.css";

const initialValues = {
  title: "",
  imageUrl: "",
  details: "",
};

export default function CreateDestination() {
  const navigate = useNavigate();

  const createHandler = async (values) => {
    try {
      const { _id: destinationId } = await createDest(values);
      navigate(`/destination/${destinationId}/details`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    createHandler,
  );

  return (
    <div className={styles["bg-img"]}>
      <form className={styles["container"]} onSubmit={submitHandler}>
        <div className={styles["create-container"]}>
          <h1>Create Destination</h1>
          <p>Fulfill all of the field, to add a new destination.</p>
          <hr />

          <div className={styles["create-icon"]}>
            <input
              className={styles["create-input"]}
              type="text"
              placeholder="Enter Title"
              name="title"
              id="title"
              value={values.title}
              onChange={changeHandler}
            />
          </div>

          <div className={styles["create-icon"]}>
            <input
              className={styles["create-input"]}
              type="text"
              placeholder="Place image"
              name="imageUrl"
              id="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
            />
          </div>

          <div className={styles["create-icon"]}>
            <textarea
              type="text"
              placeholder="Enter Details"
              name="details"
              id="details"
              value={values.details}
              onChange={changeHandler}
            />
          </div>

          <button type="submit" className={styles["create-btn"]}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
