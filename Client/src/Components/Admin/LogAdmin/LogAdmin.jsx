import React, { useState } from "react";
import styles from "./LogAdmin.module.css";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import glamify from '../../../assets/Glamify-logo-negro.png';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "black",
            "--TextField-brandBorderHoverColor": "black",
            "--TextField-brandBorderFocusedColor": "black",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const Login = ({ login }) => {
  // const [errors, setErrors] = useState({});
  const [userData, setUserdata] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (e) => {
    setUserdata({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const outerTheme = useTheme();

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
		<div className={styles.logoContainer}>
		<img src={glamify} alt="" />
		</div>
        <h2>Bienvenido Admin</h2>
        <div className={styles.emailContainer}>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              fullWidth={true}
              id="email"
              label="Correo Electrónico"
              variant="outlined"
              value={userData.email}
              onChange={handlerChange}
              name="email"
              type="email"
              required
            />
          </ThemeProvider>
        </div>
        <div className={styles.passwordContainer}>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              id="password"
              label="Contraseña"
              variant="outlined"
              name="password"
              type={showPassword ? "text" : "password"}
              value={userData.password}
              onChange={handlerChange}
              required
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            ></TextField>
          </ThemeProvider>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submit}>
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
