export class ErrorNavioAlreadyExists extends Error {
    constructor(name: string){
        super( `Esse Navio já existe! ${name}` )
    }
}
