import Link from 'next/link';
import { useState } from 'react';

function PlaceList({}) {
    const [isHover, setIsHover] = useState(100);

    const placeArr: string[] = ['Yongsan Park', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'];

    const exampleColors: string[] = ['#FF0000', '#FF8800', '#FFFF00', '#00FF00', '#06B6D4', '#0000FF', '#8000FF', '#585858', '#000000'];

    return (
        <div className="relative grid gap-3 grid-cols-1 py-[3vw] md:grid-cols-2">
            {placeArr.map((place, idx) => (
                <Link href={`/place/${place}`}>
                    <div key={`${idx}. ${place}`} className="relative" onMouseOver={() => setIsHover(idx)} onMouseOut={() => setIsHover(100)}>
                        <img src="/img_example.jpg" className={`${isHover == idx ? `opacity-30` : `opacity-100`} transition duration-1000`} alt={`${place}`} />
                        <a className={`${isHover == idx ? 'opacity-100 visible translate-x-6' : 'opacity-0'} transition duration-1000 text-lg font-[700] bottom-14 z-20 absolute`}>{place}</a>
                        <div className={`${isHover == idx ? 'opacity-100 visible translate-x-6' : 'opacity-0'} transition duration-1000 absolute z-20 bottom-6 flex space-x-4`}>
                            {exampleColors.map((color, idx2) => (
                                // <div className={`bg-[${color}] w-6 h-6 inline-flex`}></div>
                                <div key={`${color} ${idx2}`} className="w-6 h-6 inline-flex" style={{ backgroundColor: `${color}` }}></div>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default PlaceList;
