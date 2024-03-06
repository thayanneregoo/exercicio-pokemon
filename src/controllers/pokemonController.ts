import { getFullPokemon } from "../services"
import {Request,Response} from 'express'

export const getPokemonbyParam  = (req:Request,res:Response) =>{
    try {
        const pokemon = getFullPokemon(req.params.name)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(500)
    }
}

export const getPokemon = (req:Request, res:Response) => {
    try {
        const pokemon = getFullPokemon(req.body.name)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(500)
    }
}