import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useLogin } from "../../hooks/useAuth";

import styles from "./Login.module.css";
import useForm from "../../hooks/useForm";

const initialValues = { email: '', psw: '' };

export default function Login() {
  const [ err, setError ] = useState([]);
  const login = useLogin();
  const navigate = useNavigate();


  const loginHandler = async ({ email, psw }) => {
    try {
        login(email, psw);
        navigate('/');
    } catch (error) {
        setError(error.message);
    };
  };

  const { values, changeHandler, submitHandler } = useForm( initialValues, loginHandler );

  return (
    <div className={styles["bg-img"]}>
      <form className={styles["container"]} onSubmit={submitHandler}>
        <h1>Login</h1>

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={values.email}
          onChange={changeHandler}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={values.psw}
          onChange={changeHandler}
        />
        <hr />
        {err && <p>{err}</p>}

        <button type="submit" className={styles["btn"]}>
          Submit
        </button>
        <div className={styles["reg"]}>
          <p>
            Not registered? <Link to="/register">Create an account</Link>.
          </p>
        </div>
      </form>
    </div>
  );
}
