import Link from "next/link";

export function Nav(){
    return(
        <nav className="
            gap-3
            w-[1200]
            mx-auto
            p-10
            flex-wrap
            justify-center 
            flex items-center 
            h-[200] bg-black text-white 
            border-b-8 border-b-gray-600
        ">
            <Link href="/"          className="nav-item">Home</Link>
            <Link href="/login"     className="nav-item">Login</Link>
            <Link href="/categoria" className="nav-item">Categoria</Link>
            <Link href="/funcionario" className="nav-item">Funcionario</Link>
            <Link href="/funcao"    className="nav-item">Função</Link>
            <Link href="/porto"     className="nav-item">Porto</Link>
            <Link href="/operador"  className="nav-item">Operador</Link>
            <Link href="/operacao"  className="nav-item">Operação</Link>
            <Link href="/navio"     className="nav-item">Navio</Link>
            <Link href="/carga"     className="nav-item">Carga</Link>
            <Link href="/destino"   className="nav-item">Destino</Link>
            <Link href="/ocorrencia" className="nav-item">Ocorrência</Link>
            <Link href="/ponto"     className="nav-item">Ponto</Link>     
        </nav>
    )
}
