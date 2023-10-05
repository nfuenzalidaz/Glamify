import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Logged.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Menu, MenuItem, IconButton } from "@mui/material";

const Logged = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout({logoutParams:{returnTo:import.meta.env.VITE_FRONT_URL}});
    handleMenuClose();
  };

  return (
    isAuthenticated && (
      <div className={styles.loggedContainer}>
        <img className={styles.picture} src={user.picture} alt={user.name} />
        <IconButton
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <ExpandMoreIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
        </Menu>
      </div>
    )
  );
};

export default Logged;

