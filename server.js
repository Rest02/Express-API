const express = require("express");
const morgan = require("morgan");

const app = express();
let products = [
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

app.put("/products/:id", (req, res) => {
  const newData = req.body;
  const productFind = products.find(function (product) {
    return product.id === parseInt(req.params.id);
  });

  if (!productFind) {
    return res.status(404).json({
      mesagge: "Product not found",
    });
  }

  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );

  console.log(newProducts);

  res.json({
    mesagge: "Product sussesfull",
  });
});

app.delete("/products/:id", (req, res) => {
  const productFind = products.find(function (product) {
    return product.id === parseInt(req.params.id);
  });

  if (!productFind) {
    return res.status(404).json({
      mesagge: "Product not found",
    });
  }

  products = products.filter((p) => p.id !== parseInt(req.params.id));

  res.sendStatus(204);
});

app.get("/products/:id", (req, res) => {
  const productFind = products.find(function (product) {
    return product.id === parseInt(req.params.id);
  });

  if (!productFind) {
    return res.status(404).json({
      mesagge: "Product not found",
    });
  }

  res.json(productFind);
  console.log(productFind);
});

app.listen(3000);
console.log(`server on port ${3000}`);
