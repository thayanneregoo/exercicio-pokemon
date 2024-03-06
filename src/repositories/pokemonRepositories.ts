import fs from 'fs'

const { readFileSync } = require('fs'); 

export const dataPokemon:any = () => {
    const data:any = readFileSync(__dirname +'/../../bdpokemon.json', 'utf-8')
    const dataObject = JSON.parse(data)
    return dataObject
}

export const getPokemonbyName = (pokemonName:string) => {
    return dataPokemon().find((pokemon:any) => pokemon.name == pokemonName
    )}

export const getPokemonbyId:any = (id:string) => {
        return dataPokemon.find((pokemon:any) => pokemon.id == id
        )}

// const getPokemonbyParam:any = (dataPokemon:any, param:any) => {
//     return 
//     if (typeof param === 'string'){ //Verificar provável erro : talvez mesmo os numeros como parâmetros podem retornar como string
//         dataPokemon.find((pokemon:any) => 
//         pokemon.type == param
//         )}
//     else{
//         dataPokemon.find((pokemon:any) => 
//         pokemon.id == param
//     )}
//    }




   
