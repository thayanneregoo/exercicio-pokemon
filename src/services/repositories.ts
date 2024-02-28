import fs from 'fs'

export const dataPokemon:any = () => {
    const data:any = fs.promises.readFile('bdpokemon.json', 'utf8')
    return JSON.parse(data)
}
   
export const dataWeaknesses:any = () => {
    const data:any = fs.promises.readFile('bdweaknesses.json', 'utf8')
    return JSON.parse(data)
}
   
