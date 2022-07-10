import Link from 'next/link';

function Header() {
    return (
        <header className="relative p-[6vw] z-10 w-full md:py-[2.5vw] md:px-[3vw]">
            <div className="w-full h-full flex justify-between items-center">
                <Link href="/">
                    <div className="text-3xl md:text-4xl font-bold">Nerf</div>
                </Link>

                {/* Mobile Sidebar Menu Icon (Burger Box) */}
                <div className="relative flex flex-col items-center justify-center space-y-3 w-[35px] h-[35px] md:hidden">
                    <div className="h-[1px] w-full block bg-ourBlack" id="top-bun"></div>
                    <div className="h-[1px] w-full block bg-ourBlack" id="bottom-bun"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
