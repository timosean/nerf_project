import Link from 'next/link';
import { useState } from 'react';

function Header() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <header className="relative p-[6vw] z-10 w-full md:py-[2.5vw] md:px-[3vw]">
            <div className="w-full h-full flex justify-between items-center">
                <Link href="/">
                    <div className="text-3xl md:text-4xl font-bold">NERF</div>
                </Link>

                {/* Mobile Sidebar Menu Icon (Burger Box) */}
                <button className="w-[35px] h-[35px] relative flex flex-col justify-center items-center px-[6px] box-content">
                    <div
                        className={`relative flex justify-center items-center w-full h-[1px] transition-all before:content-[' '] before:absolute before:w-full before:h-[1px] before:bg-ourBlack before:transition-all before:transition-all before:duration-[250ms] before:ease-[cubic-bezier(.2,.6,.3,1)] after:content-[' '] after:absolute after:w-full after:h-[1px] after:bg-ourBlack after:transition-all after:transition-all after:duration-[250ms] after:ease-[cubic-bezier(.2,.6,.3,1)] ${
                            showSidebar
                                ? 'before:rotate-[-135deg] before:translate-x-[5.5px] before:w-[28px] after:rotate-[135deg] after:translate-x-[5.5px] after:w-[28px]'
                                : 'before:translate-y-[-5.5px] after:translate-y-[5.5px]'
                        }`}
                        onClick={() => setShowSidebar(!showSidebar)}
                    ></div>
                </button>
            </div>
        </header>
    );
}

export default Header;
