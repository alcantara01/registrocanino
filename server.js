/* eslint-disable prettier/prettier */
const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 5000; // Puedes cambiar el número de puerto si es necesario

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "cris",
  password: "Azarquiel2022",
  database: "registrocanino",
  port: 3306, // Puerto por defecto de MySQL en XAMPP
});

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: ", err);
  } else {
    console.log("Conexión exitosa a la base de datos MySQL");
  }
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor Express.js en funcionamiento!");
});
app.get("/perros", (req, res) => {
  const query =
    "SELECT id, nombre, fechaNac, pelaje, sexo, nombreMadre, nombrePadre FROM Perro";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener los datos de los perros:", err);
      res
        .status(500)
        .json({ error: "Error al obtener los datos de los perros" });
    } else {
      res.json(results);
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express.js en funcionamiento en el puerto ${PORT}`);
});
