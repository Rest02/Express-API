const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/products", (req, res) => {
  res.send("Obteniendo Productos");
});

app.post("/products", (req, res) => {
  res.send("Creando Productos");
});

app.put("/products", (req, res) => {
  res.send("Actualizando Productos");
});

app.delete("/products", (req, res) => {
  res.send("Borrando Productos");
});

app.get("/products/:id", (req, res) => {
  res.send("Obteniendo un producto");
});

app.listen(3000);
console.log(`server on port ${3000}`);
