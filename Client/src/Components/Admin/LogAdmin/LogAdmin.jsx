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

	return (
		<div>
			<h2>Inicio de Sesión</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>Correo Electrónico:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={userData.email}
						onChange={handlerChange}
						required
					/>
				</div>
				<div>
					<label htmlFor='password'>Contraseña:</label>
					<input
						type='password'
						id='password'
						name='password'
						value={userData.password}
						onChange={handlerChange}
						required
					/>
				</div>
				<div>
					<button type='submit'>Iniciar Sesión</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
