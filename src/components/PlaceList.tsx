import Link from 'next/link';
import { useState } from 'react';
import dataList from '../constants/dataList';

function PlaceList({}) {
    const [isHover, setIsHover] = useState(100);

    const imagesrc = [
        'https://images.squarespace-cdn.com/content/v1/624b3c6dd142742980614c6d/1649097838753-YTNWO5AP1FIVCL13BBT8/american-portraiture-2.jpg',
        'https://images.squarespace-cdn.com/content/v1/624b3c6dd142742980614c6d/1649097839095-QPEQ5W4OR2FQ0X3N57MK/business-card-grid.jpg',
        'https://images.squarespace-cdn.com/content/v1/624b3c6dd142742980614c6d/1649097839206-B2JN16E5EJCWFKE19NWS/novel-final.jpg',
    ];

    return (
        <div className="relative grid gap-3 grid-cols-1 py-[3vw] md:grid-cols-2 px-[0.000001px]">
            {dataList.map((data, idx) => (
                <Link href={`/place/${data.place}`} key={data.name}>
                    <div key={`${idx}. ${data.place}`} className="relative cursor-pointer flex justify-center items-center" onMouseOver={() => setIsHover(idx)} onMouseOut={() => setIsHover(100)}>
                        <img src={`${imagesrc[idx % 3]}`} className={`${isHover == idx ? `opacity-80` : `opacity-100`} w-full h-[500px] transition duration-1000`} alt={`${data.place}`} />
                        <a className={`${isHover == idx ? 'opacity-100 visible' : 'opacity-0'} transition duration-1000 text-3xl lg:text-5xl xl:text-6xl font-[700] z-20 absolute`}>{data.place}</a>
                        <div
                            className={`${
                                isHover == idx ? 'opacity-100 visible translate-x-0' : 'opacity-0 -translate-x-3 lg:-translate-x-6'
                            } transition duration-1000 absolute z-20 bottom-6 flex space-x-2 lg:space-x-3`}
                        >
                            {data.colorList3.map((color, idx2) => (
                                <div key={`${idx2} ${color}`} className="w-6 h-6 inline-flex" style={{ backgroundColor: `${color}` }}></div>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default PlaceList;
