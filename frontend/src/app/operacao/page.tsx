"use client"

export default function Operacao(){
    return(
        <div className="bg-zinc-800 h-screen flex flex-col items-center pt-5 text-white">
            <h2 className="mb-5 mt-5 text-3xl">Tipo Operação</h2>

            <form className="flex flex-col items-end gap-5 text-black ">
                <input type="text" placeholder="tipo da operação" className="p-2 w-96" />
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
