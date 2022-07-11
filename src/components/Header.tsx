import Link from 'next/link';
import { useState } from 'react';
import { BsInstagram } from 'react-icons/bs';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="relative p-[6vw] z-20 w-full md:py-[2.5vw] md:px-[3vw]">
            {/* Upper Header Area */}
            <div className="relative z-20 w-full h-full flex justify-between items-center">
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

            {/* Mobile Menu Area */}
            <div
                className={`${
                    showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
                } z-10 fixed inset-0 text-[1.2rem] transition-all duration-[600ms] ease-in-out bg-white flex flex-col justify-start items-center md:hidden`}
            >
                <div className="absolute inset-0 bg-white"></div>
                <div className="relative flex flex-col grow-1 shrink-0 w-full">
                    <nav className="relative block text-ourBlack w-full grow-1">
                        <div
                            className={`absolute top-0 left-0 w-full min-h-screen flex flex-col justify-start items-center overflow-y-scroll overflow-x-hidden transition-all ${
                                showMenu ? 'translate-y-0' : 'translate-y-[40px]'
                            }`}
                        >
                            <div className="relative flex flex-col w-full grow shrink-0 justify-center items-center mt-10">
                                <div
                                    className={`text-[9vmin] font-medium my-[4vw] mx-[5vw] transition-all duration-[250ms] ease-in-out px-[3vw] flex justify-center items-center ${
                                        showMenu ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    Work
                                </div>
                                <div
                                    className={`text-[9vmin] font-medium my-[4vw] mx-[5vw] transition-all duration-[250ms] ease-in-out px-[3vw] flex justify-center items-center ${
                                        showMenu ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    Contact
                                </div>
                            </div>
                            <div
                                className={`max-w-full w-full box-border grow-0 shrink flex items-center justify-center mb-[6vw] mx-[20px] transition-all duration-[600ms] ease-in-out ${
                                    showMenu ? 'translate-y-0' : 'translate-y-[20px]'
                                }`}
                            >
                                <div className="box-border w-full mx-[7.5px] my-[15px] flex justify-center">
                                    <BsInstagram size={24} />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
