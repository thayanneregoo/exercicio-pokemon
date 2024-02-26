fs.readFile('\pokemon.json', 'utf8', (err: any, data:any) => { // lê o arquivo json
    if (err) { //caso de erro
      console.error('Erro ao ler o arquivo:', err);
      return;
    }
    let procurado = 'pikachu'
    const objeto = JSON.parse(data); // trasformando o json em objeto
    const pokemonEncontrado = objeto.map((nome:any) => (nome == procurado));
    console.log(pokemonEncontrado)
})

