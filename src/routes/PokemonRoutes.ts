import express from "express"
import { getPokemonbyParam, getPokemons } from "../controllers" 

export const pokemonRouter = express.Router()

pokemonRouter.get('/:name', getPokemonbyParam)

pokemonRouter.get('/', getPokemons)


//Service contém a lógica 
//Controlers gestão de erros
//Routes genrencia o direcionamento
