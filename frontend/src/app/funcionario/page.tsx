"use client"

export default function funcionario(){
    return(
        <div className="bg-zinc-800 h-screen flex flex-col items-center pt-5 text-white">
            <h1 className="mb-5 mt-5 text-3xl">Funcionario</h1>

            <form className="flex flex-col items-end gap-5 text-black ">
                <input type="text" placeholder="matricula" className="p-2 w-96" />
                <input type="text" placeholder="nome funcionario" className="p-2 w-96" />
                <div className="flex gap-2 justify-between">
 
                <label>Categoria</label>
                    <select className="p-2 w-96 text-rigth" >
                        <option value="#">Categoria</option>
                        <option value="#">Estivador</option>
                        <option value="#">Conferentes</option>
                        <option value="#">Consertador</option>
                        <option value="#">Vigia</option>
                        <option value="#">Movimentador</option>
                    </select>
                 </div>
                <input type="text" placeholder="admissão (dd/mm/yyyy)" className="p-2 w-96" />
                <input type="text" placeholder="telefone" className="p-2 w-96" />
                <input type="text" placeholder="e-mail" className="p-2 w-96" />
                <input type="text" placeholder="observação" className="p-2 w-96" />


                <div className="flex gap-2 justify-between">
                    <select className="p-2 w-60 text-center" >
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                    <button className="bg-green-600 text-white 
                        p-2 roudend-lg w-32 opacity-75 hover:opacity-100">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
