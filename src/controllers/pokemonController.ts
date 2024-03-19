import { dataPokemon } from "../repositories/pokemonRepositories"
import { getFullPokemon, getFullPokemonbyId } from "../services"
import {Request,Response} from 'express'

export const getPokemonbyParam  = async (req:Request,res:Response) =>{
    try {
        const data = (req.params.name)
        const number = +data;
        let pokemon

    if (!isNaN(number)) {
         pokemon = await getFullPokemonbyId(data)
    }else{
         pokemon = await getFullPokemon(req.params.name)
    }
    res.status(200).json(pokemon)

        
    } catch (error) {
        res.status(500)
    }
}


export const getPokemonbyId  = (req:Request,res:Response) =>{
    try {
        const pokemon = getFullPokemonbyId(req.params.id)
    } catch (error) {
        res.status(500)
    }
}


export const getPokemons = (req:Request, res:Response) => {
    try {
        const pokemon = dataPokemon()
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(500)
    }
}