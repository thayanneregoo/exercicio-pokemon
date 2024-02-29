import fs from 'fs'


export const dataWeaknesses:any = () => {
    const data:any = fs.promises.readFile('bdweaknesses.json', 'utf8')
    return JSON.parse(data)
}

export const getWeaknessesbyType: any = (type:string) => {
        return dataWeaknesses.find((weaknesse: any) => weaknesse.type === type).weaknesses
}
