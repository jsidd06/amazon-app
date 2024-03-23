import express from "express";
import { data } from "./data/index.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/id/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x.id === parseInt(productId)); // if id is number use parseInt
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
