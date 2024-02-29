import { getFullPokemon } from "../services"
import {Request,Response} from 'express'

export const getPokemon  = (req:any,res:any) =>{
    try {
        const pokemon = getFullPokemon(req.body.name)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(500)
    }
}