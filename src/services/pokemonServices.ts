import { getPokemonbyId, getPokemonbyName } from "../repositories/pokemonRepositories";
import { getWeaknessesbyType } from "../repositories/weaknessesRepositories";



export const getAllWeaknesses:any = (name:string) => {
    const pokemonEncontrado =  getPokemonbyName(name)
    let pokemonWeaknesses =  pokemonEncontrado.types.map((type: any) => {
    return getWeaknessesbyType(type)
    })  
    return pokemonWeaknesses.flat().filter((item: any, index: any, self: string | any[]) => self.indexOf(item) === index).sort();
}

export const getFullPokemon:any = (name:string) => {
    let pokemonEncontrado= getPokemonbyName(name)
    const weaknesses = getAllWeaknesses(name) 
    return {...pokemonEncontrado,weaknesses:weaknesses}
}

export const getAllWeaknessesbyId:any = (id:Number) => {
    const pokemonEncontrado =  getPokemonbyId(id)
    let pokemonWeaknesses =  pokemonEncontrado.types.map((type: any) => {
    return getWeaknessesbyType(type)
    })  
    return pokemonWeaknesses.flat().filter((item: any, index: any, self: string | any[]) => self.indexOf(item) === index).sort();
}

export const getFullPokemonbyId:any = (id:Number) =>{
    let pokemonEncontrado = getPokemonbyId(id)
    const weaknesses= getAllWeaknessesbyId(id)
    return {...pokemonEncontrado,weaknesses:weaknesses}
 }


console.log(getFullPokemonbyId(2))