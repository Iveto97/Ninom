import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import { useState } from 'react';
import { register } from '../../utils/authApi';
import useForm from '../../hooks/useForm';

export default function Register() {
    const [error, setError] = useState('');

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
          <h1>Регистрация</h1>
          <p>Въведете своите данни, за да се регистрирате.</p>
          <hr />

          <label htmlFor="email">
            <b>Имейл</b>
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
            <b>Парола</b>
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
            <b>Повторете паролата</b>
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