const server = require("./src/app");
const { conn } = require("./src/db");

//const PORT = process.env.PORT;
const port = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log("Servidor escuchando en el puerto:", port);
  });
});