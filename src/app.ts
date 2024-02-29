import { pokemonRouter } from "./routes";

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(pokemonRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });