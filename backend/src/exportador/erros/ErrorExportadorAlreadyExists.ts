export class ErrorExportadorAlreadyExists extends Error {
    constructor(name: string){
        super( `Esse Exportador já existe! ${name}` )
    }
}
