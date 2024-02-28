import { dataPokemon,dataWeaknesses } from "./repositories";



const pokemonObject:any = (dataPokemon:any,pokemonProcurado:string) => {
   return 
   dataPokemon.find((pokemon:any) => 
    pokemon.type == pokemonProcurado
   )}

const weaknessesObject:any = (dataWeaknesses:any,pokemonObject:any) => {
    return 
    dataWeaknesses.find((fraqueza: any) => 
    fraqueza.type === pokemonObject.type).weaknesses;
}


