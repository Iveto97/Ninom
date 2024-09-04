import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import useForm from '../../hooks/useForm';
import { useRegister } from '../../hooks/useAuth';

import styles from './Register.module.css';

export default function Register() {
  const [error, setError] = useState('');

  const register = useRegister();
  const navigate = useNavigate();

  const initialValues = { email: '', psw: '', 'psw-repeat': '' };

  const registerHandler = async (values) => {
        if(values.psw !== values['psw-repeat']) {
            return setError('Password mismatch!');
        };

        try {
            register(values.email, values.psw);
            navigate('/');
        } catch (error) {
            setError(error.message);
        };
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

  return (
    <section className={styles['bg-img']}>
      <form
        className={styles["container"]}
        onSubmit={submitHandler}
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
            id="psw"
            value={values.psw}
            onChange={changeHandler}
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            value={values['psw-repeat']}
            onChange={changeHandler}
          />
          <hr />

          <button type="submit" className={styles["registerbtn"]}>
            Register
          </button>
        </div>

        <div className={styles[("container", "signin")]}>
          <p>
          Already have an account? <Link to="/login">Login</Link>.
          </p>
        </div>
      </form>
    </section>
  );
}