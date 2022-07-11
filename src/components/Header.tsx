import Link from 'next/link';
import { useState } from 'react';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header className="relative p-[6vw] z-10 w-full md:py-[2.5vw] md:px-[3vw]">
                <div className="w-full h-full flex justify-between items-center">
                    <Link href="/">
                        <div className="text-3xl md:text-4xl font-bold">NERF</div>
                    </Link>

                    {/* Mobile Sidebar Menu Icon (Burger Box) */}
                    <button className="w-[35px] h-[35px] relative flex flex-col justify-center items-center px-[6px] box-content md:hidden">
                        <div
                            className={`relative flex justify-center items-center w-full h-[1px] transition-all before:content-[' '] before:absolute before:w-full before:h-[1px] before:bg-ourBlack before:transition-all before:transition-all before:duration-[250ms] before:ease-[cubic-bezier(.2,.6,.3,1)] after:content-[' '] after:absolute after:w-full after:h-[1px] after:bg-ourBlack after:transition-all after:transition-all after:duration-[250ms] after:ease-[cubic-bezier(.2,.6,.3,1)] ${
                                showMenu
                                    ? 'before:rotate-[-135deg] before:translate-x-[5.5px] before:w-[28px] after:rotate-[135deg] after:translate-x-[5.5px] after:w-[28px]'
                                    : 'before:translate-y-[-5.5px] after:translate-y-[5.5px]'
                            }`}
                            onClick={() => setShowMenu(!showMenu)}
                        ></div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Area */}
            <div className={`${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all w-full h-full fixed bg-white flex flex-col justify-center items-center md:hidden`}>
                <nav className="w-full grow-1 shrink-0 flex flex-col items-center justify-center">
                    <ul className="w-full flex flex-col items-center justify-center px-[3vw]">
                        <li className={`text-[8.5vmin] font-normal my-[3vw] mx-[5vw] transition-all ${showMenu ? 'opacity-100' : 'opacity-0'}`}>Work</li>
                        <li className={`text-[8.5vmin] font-normal my-[3vw] mx-[5vw] transition-all ${showMenu ? 'opacity-100' : 'opacity-0'}`}>Contact</li>
                    </ul>
                </nav>
                <div className="w-full grow-0 shrink-1 flex items-center justify-center mb-[6vw] mx-[20px]">
                    <div className="mx-[7.5px] my-[15px]">인스타아이콘</div>
                </div>
            </div>
        </>
    );
}

export default Header;
