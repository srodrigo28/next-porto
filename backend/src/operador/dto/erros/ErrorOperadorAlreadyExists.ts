export class ErroOperadorAlreadyExists extends Error {
    constructor(name: string) {
        super (`Esse Operador já existe !${name}`)
    }
};

