export class ErrorCategoriaAlreadyExists extends Error {
    constructor(name: string){
        super( `Essa categoria já existe! ${name}` )
    }
}
