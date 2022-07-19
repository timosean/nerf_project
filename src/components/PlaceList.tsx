import Link from 'next/link';
import { useState } from 'react';
import dataList from '../dataList';

function PlaceList({}) {
    const [isHover, setIsHover] = useState(100);

    return (
        <div className="relative grid gap-3 grid-cols-1 py-[3vw] md:grid-cols-2">
            {dataList.map((data, idx) => (
                <Link href={`/place/${data.name}`}>
                    <div key={`${idx}. ${data.place}`} className="relative cursor-pointer" onMouseOver={() => setIsHover(idx)} onMouseOut={() => setIsHover(100)}>
                        <img src="/img_example.jpg" className={`${isHover == idx ? `opacity-80` : `opacity-100`} transition duration-1000`} alt={`${data.place}`} />
                        <a className={`${isHover == idx ? 'opacity-100 visible translate-x-6' : 'opacity-0'} transition duration-1000 text-lg font-[700] bottom-14 z-20 absolute`}>{data.place}</a>
                        <div className={`${isHover == idx ? 'opacity-100 visible translate-x-6' : 'opacity-0'} transition duration-1000 absolute z-20 bottom-6 flex space-x-4`}>
                            {data.colorList3.map((color, idx2) => (
                                <div key={`${idx2} ${color}`} className="w-6 h-6 inline-flex" style={{ backgroundColor: `${color}`}}></div>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default PlaceList;
