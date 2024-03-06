import fs from 'fs'

const { readFileSync } = require('fs'); 

export const dataWeaknesses:any = () => {
    const data:any = readFileSync(__dirname +'/../../bdweaknesses.json', 'utf-8')
    const dataObject = JSON.parse(data)
    return dataObject
}


export const getWeaknessesbyType: any = (type:string) => {
        const weaknesseObject =  dataWeaknesses().find((weaknesse: any) => weaknesse.type === type)
        return weaknesseObject.weaknesses
}
