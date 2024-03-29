import { pokemonRouter } from "./routes";

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', pokemonRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });