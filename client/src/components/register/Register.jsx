import { Link } from 'react-router-dom';
import { post } from '../../utils/requester';
import styles from './Register.module.css';
import { useEffect, useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [res, setRes] = useState(false);

  const formRegSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const psw = formData.get("psw");

    setEmail(email);
    setPsw(psw);
    setRes(true);
  };

  if(res) {
    useEffect(() => {
        (async () => {
          const data = {
            email,
            psw,
          };
    
          const request = await post("users", data);
          console.log(request);
          setRes(request);
        })();
      }, []);
    
  }

  return (
    <div className={styles["bg-img"]}>
      <form
        action="/action_page.php"
        className={styles["container"]}
        onSubmit={formRegSubmitHandler}
      >
        <div>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <button type="submit" className={styles["registerbtn"]}>
            Register
          </button>
        </div>

        <div className={styles[("container", "signin")]}>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>.
          </p>
        </div>
      </form>
    </div>
  );
}