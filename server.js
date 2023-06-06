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


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express.js en funcionamiento en el puerto ${PORT}`);
});


// Ruta para obtener los datos de los perros
app.get("/perros", (req, res) => {
  // Consulta SQL para seleccionar los campos deseados de la tabla "Perro"
  const query =
    "SELECT * FROM Perro";
  // Ejecutar la consulta en la base de datos
  connection.query(query, (err, results) => {
    if (err) {
      // Si ocurre un error al ejecutar la consulta, enviar una respuesta de error
      console.error("Error al obtener los datos de los perros:", err);
      res
        .status(500)
        .json({ error: "Error al obtener los datos de los perros" });
    } else {
      // Si la consulta se ejecuta correctamente, enviar los resultados como respuesta
      res.json(results);
    }
  });
});

// Ruta para obtener los datos del perro individual
app.get("/perros/:id", (req, res) => {
  const perroId = req.params.id;
  // Consulta SQL para seleccionar los datos del perro con el ID especificado
  const query = `SELECT * FROM Perro WHERE id = ${perroId}`;
  // Ejecutar la consulta en la base de datos
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener los datos del perro:", err);
      res.status(500).json({ error: "Error al obtener los datos del perro" });
    } else {
      if (results.length > 0) {
        // Si se encuentra el perro con el ID especificado, enviar los datos como respuesta
        res.json(results[0]);
      } else {
        // Si no se encuentra el perro, enviar una respuesta de error
        res.status(404).json({ error: "Perro no encontrado" });
      }
    }
  });
});
