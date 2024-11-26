

function Header(){

    return(
        <>
            <div className="bg-local" style={{ backgroundImage: "url('https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fjasper-lake.webp&w=1920&q=75')" }}>
                <div className="px-[40px] py-[20px] bg-gradient-to-b from-sky-800 bg-[length:100%_200px] bg-no-repeat">
                    <nav className="flex flex-row justify-between">
                        <ul className="flex flex-row gap-7 items-center">
                            <li>
                                <img src="logo.svg"></img>
                            </li>
                            <li>
                                <a className="text-white text-lg font-bold" href="#">Dormir</a>
                            </li>
                            <li>
                                <a className="text-white text-lg font-bold" href="#">Estresse e Ansiedade</a>
                            </li>
                            <li>
                                <a className="text-white text-lg font-bold" href="#">Atenção Plena</a>
                            </li>
                        </ul>
                        <ul className="flex flex-row gap-8 items-center">
                            <li>
                                <a className="text-white text-lg font-bold" href="#">Triagem</a>
                            </li>
                            <li>
                                <a className="text-white text-lg font-bold" href="#">Calm para empresas</a>
                            </li>
                            <li>
                                <a className="text-white text-lg font-bold" href="#">Calm Health</a>
                            </li>
                            <li>
                                <a className="text-white text-lg font-bold" href="#">Fazer login</a> 
                            </li>
                            <li>
                                <a className="
                                bg-white px-5 py-4 rounded-full text-gray-600 bold text-lg font-bold
                                hover:cursor-pointer hover:bg-slate-200 transition-all duration-700
                                ">
                                    Experiment o Calm gratuitamente
                                </a>
                            </li> 
                        </ul>   
                    </nav>
                    <div className="h-[760px]">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;