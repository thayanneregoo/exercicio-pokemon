
const fs = require('fs');


let novo:any =() => {
  let pokemonEncontrado:any
  // fs.readFile('\pokemon.json', 'utf8', (err: any, data:any) => { // lê o arquivo json
  //   if (err) { //caso de erro
  //     console.error('Erro ao ler o arquivo:', err);
  //     return;
  //   }
  //   let procurado = 'pikachu'
  //   const objeto = JSON.parse(data); // trasformando o json em objeto
  //   const pokemonEncontrado = objeto.find((pokemon:any) => pokemon.name == procurado) // .map((pokemon:any) => pokemon.types);
  //   //console.log(pokemonEncontrado)
  //   fs.readFile('\weaknesses.json', 'utf8', (err:any, data:any) => {
  //     if(err){
  //       console.error('erro ao ler', err)
  //     }
  //     const fraquezas = JSON.parse(data);
  //     const fraqueza = fraquezas.find((fraqueza:any) => fraqueza.type == pokemonEncontrado.types[0])
  //     pokemonEncontrado.weaknesses=fraqueza.weaknesses
  //     console.log('testaaaaaaaaaaaass',pokemonEncontrado)
  //   })
  //   //console.log('segundo pokemon', pokemonEncontrado)
  // });


  // FALTA VERIFICAR CASO O POKEMON SEJA DE DOIS TIPOS

async function lerArquivo(): Promise<void> {
  try {
      // Primeira leitura do arquivo 'pokemon.json'
    const dataPokemon: string = await fs.promises.readFile('bdpokemon.json', 'utf8');
      // variavel que diz qual pokemon está sendo procurado
    let procurado = 'gabite'; 
      // Trasformando o JSON em objeto
    const objeto = JSON.parse(dataPokemon);
      //Procurando o pokemon pelo nome 
    const pokemonEncontrado = objeto.find((pokemon:any) => pokemon.name == procurado);

      // Segunda leitura do arquivo 'weaknesses.json'
    const dataFraquezas: string = await fs.promises.readFile('bdweaknesses.json', 'utf8');
    const fraquezas = JSON.parse(dataFraquezas);
      //criando lista vazia para receber fraquezas
    // let weaknesses:any = []
    
    // pokemonEncontrado.types.forEach((elemento: any) => {
    //   const fraquezaEncontrada = fraquezas.find((fraqueza: any) => fraqueza.type === elemento);
    //   if (fraquezaEncontrada) {
    //       weaknesses.push(fraquezaEncontrada.weaknesses);
    //   }
    
    let weaknesses = pokemonEncontrado.types.map((elemento: any) => {
      return fraquezas.find((fraqueza: any) => fraqueza.type === elemento).weaknesses;
    })
  
    // O flat transforma a duas listas em uma lista só e o filter filtra os elementos   
    weaknesses = weaknesses.flat().filter((item: any, index: any, self: string | any[]) => self.indexOf(item) === index);


    
    // fraquezas.find(
    //       (fraqueza:any) => 
    //         fraqueza.type == pokemonEncontrado.types.map((type:any) =>{
    //           console.log('VEEER',fraqueza)
    //           return{
    //             blabla: fraqueza 
    //           }}))
    //   console.log(fraqueza)

    
    pokemonEncontrado.weaknesses = weaknesses
    // res.send(pokemonEncontrado);
    // Imprime o resultado
    console.log('Resultado:', pokemonEncontrado);
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
  }
}

// Chama a função assíncrona
lerArquivo();

  
}

