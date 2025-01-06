

export default function Login(){
    
    const loginImg = "https://www.locaweb.com.br/blog/wp-content/uploads/2023/07/Sistema-operacional-capa.jpg"
  
  return(
        <div className="bg-zinc-800 text-white h-screen flex justify-center">
            <img src={loginImg} className="flex-1 hidden md:flex" alt="" />
            <form className="w-[400] bg-zinc-800 h-screen p-10 text-white flex gap-5 flex-col">
                <h1 className="mb-5 mt-5 text-3xl text-center">Login</h1>

                <input type="text" placeholder="email" className="p-2 outline-none border-none roudend-md" />
                <input type="password" placeholder="senha" className="p-2 outline-none border-none roudend-md" />
                <div className="flex gap-5">
                    <button className="bg-green-500 flex-1 p-2 rounded-md text-white" >Entrar</button>
                    <button className="bg-blue-500  flex-1 p-2 rounded-md text-white" >Cadastrar</button>
                </div>
            </form>
        </div>
    )
}