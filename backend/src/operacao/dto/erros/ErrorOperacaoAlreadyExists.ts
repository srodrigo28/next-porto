export class ErrorOperacaoAlreadyExists extends Error {
    constructor(name: string){
        super( `Essa Operação já existe! ${name}` )
    }
}
