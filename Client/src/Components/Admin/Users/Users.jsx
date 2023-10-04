import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../Redux/Features/userSlice";
import Navbar from "../NavBar/NavBar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  styled,
} from "@mui/material";
import styles from "./Users.module.css";

// Define los estilos personalizados para las celdas de encabezado
const BlackHeaderTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  fontSize: 14,
}));

// Define los estilos personalizados para las celdas de datos
const TransparentDataTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#c8c8c8",
  borderBottom: "1px solid black",
  fontSize: 14,
}));

// Define los estilos personalizados para las celdas de datos con colores condicionales
const ConditionalDataTableCell = styled(TableCell)(({ theme, blocked }) => ({
	backgroundColor: blocked ? "red" : "green",
	color: "white",
	borderBottom: "1px solid black",
	fontSize: 14,
  }));
  

const Users = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>LISTA DE USUARIOS</h1>
      <Box display="flex" justifyContent="center" marginBottom="4rem">
        <TableContainer component={Paper} sx={{maxWidth: "1000px"}}>
          <Table>
            <TableHead>
              <TableRow>
                <BlackHeaderTableCell>ID</BlackHeaderTableCell>
                <BlackHeaderTableCell>NOMBRE</BlackHeaderTableCell>
                <BlackHeaderTableCell>EMAIL</BlackHeaderTableCell>
                <BlackHeaderTableCell>BLOQUEADO</BlackHeaderTableCell>
                {/* Agrega más encabezados aquí si es necesario */}
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TransparentDataTableCell>{user.id}</TransparentDataTableCell>
                  <TransparentDataTableCell>{user.name}</TransparentDataTableCell>
                  <TransparentDataTableCell>{user.email}</TransparentDataTableCell>
                  <ConditionalDataTableCell>{user.blocked ? "Está bloqueado" : "No bloqueado"}</ConditionalDataTableCell>
                  {/* Agrega más celdas de datos aquí si es necesario */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Users;
