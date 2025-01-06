export class ErrorFuncionario extends Error{
 constructor (name: string) {
    super (`Esse Funcionário já Existe ! ${name}`)
 }
}
