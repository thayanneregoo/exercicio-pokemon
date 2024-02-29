import express from "express"
import { getPokemon, getPokemonbyParam } from "../controllers" 

export const pokemonRouter = express.Router()

pokemonRouter.post('/:name', getPokemonbyParam)
pokemonRouter.post('/', getPokemon)


//Service contém a lógica 
//Controlers gestão de erros
//Routes genrencia o direcionamento
