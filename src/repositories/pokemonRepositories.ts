import fs from 'fs'


export const dataPokemon:any = () => {
    const data:any = fs.promises.readFile('bdpokemon.json', 'utf8')
    const dataObject = JSON.parse(data)
    return dataObject
}
console.log(dataPokemon())


export const getPokemonbyName:any = (pokemonName:string) => {
    return dataPokemon.find((pokemon:any) => pokemon.name == pokemonName
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




   
