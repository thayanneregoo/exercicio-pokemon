const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fs = require('fs');

app.get('/', (req:any, res:any) => {
  fs.readFile('\pokemon.json', 'utf8', (err: any, data:any) => { // lê o arquivo json
    if (err) { //caso de erro
      console.error('Erro ao ler o arquivo:', err);
      return;
    }
    let procurado = 'pikachu'
    const objeto = JSON.parse(data); // trasformando o json em objeto
    const pokemonEncontrado = objeto.find((pokemon:any) => pokemon.name == procurado) // .map((pokemon:any) => pokemon.types);
    //console.log(pokemonEncontrado)
    fs.readFile('\weaknesses.json', 'utf8', (err:any, data:any) => {
      if(err){
        console.error('erro ao ler', err)
      }
      const fraquezas = JSON.parse(data);
      const fraqueza = fraquezas.find((fraqueza:any) => fraqueza.type == pokemonEncontrado.types[0])
      pokemonEncontrado.weaknesses=fraqueza
      console.log('testaaaaaaaaaaaass',pokemonEncontrado)
    })
    res.send(pokemonEncontrado);
    //console.log('segundo pokemon', pokemonEncontrado)
  });
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});