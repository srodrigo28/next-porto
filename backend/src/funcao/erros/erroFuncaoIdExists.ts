export class erroFuncaoIdExists extends Error {
    constructor(idFun: string){
        super(`Uma função com o id: ${idFun} já existe!`)
    }
}