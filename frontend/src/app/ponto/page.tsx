"use client"

export default function Ponto(){
    return(
        <div className="bg-zinc-800 h-screen flex flex-col items-center pt-5 text-white">
            <h1 className="mb-5 mt-5 text-3xl">Ponto (TPA) </h1>

            <form className="flex flex-col items-end gap-5 text-black ">
                <div className="flex gap-2 justify-between">
                    <select className="p-2 w-96 text-rigth" >
                        <option value="#">Navio</option>
                    </select>
                 </div>
   
                 <div className="flex gap-2 justify-between">
                    <select className="p-2 w-96 text-rigth" >
                        <option value="#">Porto</option>
                    </select>
                 </div>
   
                 <div className="flex gap-2 justify-between">
                    <select className="p-2 w-96 text-rigth" >
                        <option value="#">Operador Portuário</option>
                    </select>
                 </div>
   
                 <div className="flex gap-2 justify-between">
                    <select className="p-2 w-96 text-rigth" >
                        <option value="#">Tipo Operação</option>
                    </select>
                 </div>

                 <input type="text" placeholder="Data Movto (dd/mm/yyyy)" className="p-2 w-96" />
                 <input type="text" placeholder="Viagem (mm/yyyy)" className="p-2 w-96" />

                 <div className="flex gap-2 justify-between">
                    <select className="p-2 w-96 text-rigth" >
                        <option value="#">Dias Trabalhados</option>
                    </select>
                 </div>

                 <div className="flex gap-2 justify-between">
                    <select className="p-2 w-96 text-rigth" >
                        <option value="#">Localização</option>
                    </select>
                 </div>

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
