import { dataPokemon, getPokemonbyName } from "../repositories/pokemonRepositories";
import { getWeaknessesbyType } from "../repositories/weaknessesRepositories";



export const getAllWeaknesses:any = (name:string) => {
    const pokemonEncontrado =  getPokemonbyName(name)
    let pokemonWeaknesses =  pokemonEncontrado.types.map((type: any) => {
    return getWeaknessesbyType(type)})
    
    return pokemonWeaknesses.flat().sort();
}

export const getFullPokemon:any = (name:string) => {
    let pokemonEncontrado= getPokemonbyName(name)
    const weaknesses = getAllWeaknesses(name) 
    return {...pokemonEncontrado,weaknesses:weaknesses}
}


