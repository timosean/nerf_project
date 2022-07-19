import React, {useState} from "react";

// 컬러코드가 담겨있는 배열 ex) colorList3, colorList4, colorList5
interface PalleteProps {
    colorList: string[];
}

function Pallete({colorList}: PalleteProps) {
    // 커서 올렸을 때, opacity
    const [isHoover, setIsHoover] = useState(100);
    // 배열 길이가 9, 16, 25냐에 따라 다름
    const cnt: number = Math.sqrt(colorList.length);

    if(cnt == 3) {
        return(
            <div className="grid grid-cols-3 gap-3 flex justify-items-center px-[16.6%]">
                {colorList.map((color, idx) => (
                    <div className={`${isHoover == idx ? 'opacity-30' : 'opacity-100'} transition duration-1000 w-[20vh] pb-[20vh]`} style={{backgroundColor: `${color}`}} onMouseOver={() => setIsHoover(idx)} onMouseOut={() => setIsHoover(100)}></div>
                ))}
            </div>
        );
    } else if(cnt == 4) {
        return(
            <div className="grid grid-cols-4 gap-3 flex justify-items-center px-[16.6%]">
                {colorList.map((color, idx) => (
                    <div className={`${isHoover == idx ? 'opacity-30' : 'opacity-100'} transition duration-1000 w-[15vh] pb-[15vh]`} style={{backgroundColor: `${color}`}} onMouseOver={() => setIsHoover(idx)} onMouseOut={() => setIsHoover(100)}></div>
                ))}
            </div>
        );
    } else {
        return(
            <div className="grid grid-cols-5 gap-2 flex justify-items-center px-[16.6%]">
                {colorList.map((color, idx) => (
                    <div className={`${isHoover == idx ? 'opacity-30' : 'opacity-100'} transition duration-1000 w-[12vh] pb-[12vh]`} style={{backgroundColor: `${color}`}} onMouseOver={() => setIsHoover(idx)} onMouseOut={() => setIsHoover(100)}></div>
                ))}
            </div>
        );
    }
    
}

export default Pallete;