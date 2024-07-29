import { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
  
      <div className={styles["bg-img"]}>
        <form action="/action_page.php" className={styles["container"]}>
          <h1>Login</h1>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit" className={styles["btn"]}>
            Login
          </button>
          <div className={styles["reg"]}>
            <p>
              You don't have an account? <Link to="/register">Register</Link>.
            </p>
          </div>
        </form>
      </div>
  );
}
