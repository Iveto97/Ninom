import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useLogin } from "../../hooks/useAuth";

import styles from "./Login.module.css";
import useForm from "../../hooks/useForm";

import { TbLogin2 } from "react-icons/tb";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const initialValues = { email: "", psw: "" };

export default function Login() {
  const [err, setError] = useState([]);
  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async ({ email, psw }) => {
    try {
      login(email, psw);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler,
  );

  return (
    <div className={styles["bg-img"]}>
      <h1 className={styles["login-header"]}>Login</h1>
      <form className={styles["container"]} onSubmit={submitHandler}>
        <div className={styles["login-icon-container"]}>
          <span>
            <MdOutlineMarkEmailRead />
          </span>
          <input
            className={styles["login-input"]}
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={changeHandler}
          />
        </div>

        <div className={styles["login-icon-container"]}>
          <span>
            <RiLockPasswordLine />
          </span>
          <input
            className={styles["login-input"]}
            type="password"
            placeholder="Password"
            name="psw"
            value={values.psw}
            onChange={changeHandler}
          />
        </div>

        <hr />
        {err && <p>{err}</p>}

        <button type="submit" className={styles["btn"]}>
          <span className={styles["login-icon"]}>
            <TbLogin2 />
          </span>
          Login
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
