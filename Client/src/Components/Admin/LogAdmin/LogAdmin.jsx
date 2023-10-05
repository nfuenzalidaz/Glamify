import React, { useState } from "react";
import styles from "./LogAdmin.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = ({ login }) => {
  // const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.logInMsg}>INICIAR SESION</h2>
        <div className={styles.emailContainer}>
          <label className={styles.labels} htmlFor="email">
            USUARIO:
          </label>
          <input
            className={styles.Inputs}
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handlerChange}
            required
          />
        </div>
        <div className={styles.passwordContainer}>
          <label className={styles.labels} htmlFor="password">
            CONTRASEÑA:
          </label>
          <input
            className={styles.Inputs}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={userData.password}
            onChange={handlerChange}
            required
          />
		  <div className={styles.ShowMain}>
          <button className={styles.showPassword}
            type="button"
            onClick={handleTogglePasswordVisibility}>
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
		  </div>
        </div>
        <button className={styles.buttonLog} type="submit">
          INICIAR SESION
        </button>
      </form>
    </div>
  );
};

export default Login;
