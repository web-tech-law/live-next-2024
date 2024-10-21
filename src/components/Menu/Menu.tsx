import Link from 'next/link'

export default function Menu() {
    return (

        <nav className=" border-gray-200 dark:bg-[#4B3F3F]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#4CF214]">GAME STORE</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#4B3F3F]  ">
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#4CF214]  rounded md:bg-transparent md:p-0  " aria-current="page">HOME</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:p-0 dark:text-[#4CF214]">SOBRE</a>
                        </li>

                        <li>
                            <Link href="/produto" className="block py-2 px-3 rounded md:p-0 bg-[#4CF214] w-32 h-7 text-center font-bold   dark:text-black">PRODUTO</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}


















