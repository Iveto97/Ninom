import { Link } from "react-router-dom";

import styles from './CreateDestination.module.css';

const isUser = localStorage.getItem('accessToken');

export default function CreateDestination() {
  return (
    <section className={styles['bg-img']}>
    <form
      className={styles["container"]}
    >
      <div>
        <h1>Създаване на дестинация</h1>
        <p>Попълнете всички полета, за да добавите нова дестинация.</p>
        <hr />

        <label htmlFor="title">
          <b>Заглавие</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="title"
          id="title"
        />

        <label htmlFor="image">
          <b>Снимка</b>
        </label>
        <input
          type="text"
          placeholder="Enter Password"
          name="image"
          id="image"
        />

        <label htmlFor="details">
          <b>Детайли</b>
        </label>
        <textarea
          type="text"
          placeholder="Repeat Password"
          name="details"
          id="details"
        />
        <hr />

        <button type="submit" className={styles["registerbtn"]}>
          Регистрация
        </button>
      </div>

      <div className={styles[("container", "signin")]}>
        <p>
          Вече имате регистрация? <Link to="/login">Вход</Link>.
        </p>
      </div>
    </form>
  </section>
  );
}
