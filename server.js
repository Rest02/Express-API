const express = require("express");
const morgan = require("morgan");

const app = express();
const products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send(newProduct);
});

app.put("/products", (req, res) => {
  res.send("Actualizando Productos");
});

app.delete("/products", (req, res) => {
  res.send("Borrando Productos");
});

app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const productFind = products.find(function (product) {
    return product.id === parseInt(req.params.id);
  });

  if(!productFind){
    return res.status(404).json({
      mesagge : "Product not found"
    })
  }

  res.json(productFind);
  console.log(productFind);
});

app.listen(3000);
console.log(`server on port ${3000}`);
