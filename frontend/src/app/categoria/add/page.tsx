'use client'

import { FormEvent, useState } from "react"

export default function Add(){
    const [codigo, setCodigo] = useState("")
    const [nome, setNome] = useState("")
    const [ativo, setAtivo] = useState("")

    const cadastrar = async (event: FormEvent) => {
        event.preventDefault()
        
        if(!codigo){
            alert('Por favor preencher o campo código')
            return true
        }

        if(!nome){
            alert('Por favor preencher o campo categoria')
            return true
        }

        if(!ativo){
            alert('Por favor preencher o campo Status')
            return true
        }
        
       const res = await fetch('http://localhost:8080/categoria', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                codigo,
                nome,
                ativo,
            })
        })
        alert('Cadastrado com sucesso');
        setCodigo(''), setNome(''), setAtivo('')
    }

    return(
        
        <div className="bg-zinc-800 h-screen flex flex-col items-center pt-5 text-white">
            <form className="flex flex-col items-end gap-5 text-black">
            <input type="text" placeholder="codigo" 
                className="p-2 w-20 self-start" value={codigo} onChange={ e => setCodigo(e.target.value)} 
            />
            <input type="text" placeholder="nome categoria" 
                className="p-2 w-96" value={nome} onChange={ e => setNome(e.target.value)}
            />
            <div className="flex gap-2 justify-between w-96">
                <select className="p-2 w-60 text-center" 
                    value={ativo} onChange={ e => setAtivo(e.target.value)}
                >
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
                <button onClick={cadastrar} className="bg-green-600 text-white 
                    p-2 roudend-lg w-32 opacity-75 hover:opacity-100 duration-300">
                        Cadastrar
                </button>
            </div>
            </form>
        </div>
    )
}