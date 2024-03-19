import express from "express";
import { data } from "./data/index.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
