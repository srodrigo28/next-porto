import Link from "next/link"

interface CategoriaProps{
    id?: number,
    codigo?: string,
    nome?: string,
    ativo?: string,
}

export default async function Categoria( props: CategoriaProps ){
    const response = await fetch('http://localhost:8080/categoria')
    const data = await response.json()   
    return(
        <div className="bg-zinc-800 h-screen flex flex-col items-center pt-5 text-white">
                <h4 className="mb-3 mt-3 text-3xl">Categoria</h4>
                

            <div className="mt-10">
                 <div className="flex items-center justify-between px-5">
           
                <h3 className="text-center text-3xl mb-3">Lista de categorias</h3>
                <Link href="/categoria/add" className="w-10 h-10 rounded-md flex items-center justify-center bg-green-600 text-white">+</Link>
            </div>

                <ul className="flex flex-col gap-5">

                    { data.map(( item: CategoriaProps ) => (
                        <li key={item.id} className="flex items-center gap-2 bg-zinc-700 p-2 py-5 px-10 w-[600] rounded-lg">
                            <span className="p-3 bg-black rounded-full font-semibold" > {item.codigo} </span>
                            <div className="flex-1 flex items-center justify-between px-5 ">
                                <p>{item.nome}</p>
                                <div className=" flex gap-5">
                                    <button className="bg-blue-600 py-3 px-5 rounded-lg">editar</button>
                                    <button className="bg-red-600 py-3 px-5 rounded-lg">excluir</button>
                                </div>
                            </div>
                        </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
