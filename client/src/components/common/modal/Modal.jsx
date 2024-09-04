import styles from "./Modal.module.css";

export default function Modal({ setIsOpen, setIsConfirmed, message }) {
  const deleteHandler = () => {
    setIsOpen(false);
    setIsConfirmed(true);
  };

  return (
    <>
      <div className={styles["darkBG"]} onClick={() => setIsOpen(false)} />
      <div className={styles["centered"]}>
        <div className={styles["modal"]}>
          <div className={styles["modalHeader"]}>
            <h5 className={styles["heading"]}>{message[0]}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            x{/* <RiCloseLine style={{ marginBottom: "-3px" }} /> */}
          </button>
          <div className={styles["modalContent"]}>{message[1]}</div>
          <div className={styles["modalActions"]}>
            <div className={styles["actionsContainer"]}>
              <button
                className={styles["deleteBtn"]}
                onClick={() => {
                  setIsConfirmed(true);
                  setIsOpen(false);
                }}
              >
                Delete
              </button>
              <button
                className={styles["cancelBtn"]}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
