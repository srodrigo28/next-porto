export class ErrorPortoAlreadyExists extends Error {
    constructor(name: string){
        super( `Esse Porto já existe! ${name}` )
    }
}
