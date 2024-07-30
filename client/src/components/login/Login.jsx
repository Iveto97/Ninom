import { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
  
      <div className={styles["bg-img"]}>
        <form className={styles["container"]}>
          <h1>Вход</h1>

          <label htmlFor="email">
            <b>Имейл</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label htmlFor="psw">
            <b>Парола</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit" className={styles["btn"]}>
            Вход
          </button>
          <div className={styles["reg"]}>
            <p>
              Все още нямате регистрация? <Link to="/register">Регистрация</Link>.
            </p>
          </div>
        </form>
      </div>
  );
}
