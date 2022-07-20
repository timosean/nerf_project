import React, {useState} from "react";

// 컬러코드가 담겨있는 배열 ex) colorList3, colorList4, colorList5
interface PalleteProps {
    colorList: string[];
}

function Pallete({colorList}: PalleteProps) {
    // 커서 올렸을 때, opacity
    const [isHover, setIsHover] = useState(100);
    // 배열 길이가 9, 16, 25냐에 따라 다름
    const cnt: number = Math.sqrt(colorList.length);

    // 높이 일단 맞춰보긴 했는데 차이 많이나면 height 잡아준다음에 중앙으로 맞춰주는게 나을듯.
    // 페이드 방식으로 바꾸면 호버링 판정이 5x5 팔레트일때만 들어간다... 현재 탭을 확인해서 z-index를 걸어줘야하는건가...
    if(cnt == 3) {
        return(
            <div className="grid grid-cols-3 gap-4 flex justify-items-center w-[17rem] sm:w-[33rem] md:w-[38rem] mx-[auto]">
                {colorList.map((color, idx) => (
                    <div className={`${isHover == idx ? 'opacity-30' : 'opacity-100'} transition duration-1000 w-[5rem] h-[5rem] sm:w-[10rem] sm:h-[10rem] md:w-[12rem] md:h-[12rem]`} style={{backgroundColor: `${color}`}} onMouseOver={() => setIsHover(idx)} onMouseOut={() => setIsHover(100)}></div>
                ))}
            </div>
        );
    } else if(cnt == 4) {
        return(
            <div className="grid grid-cols-4 gap-3 flex justify-items-center w-[17rem] sm:w-[33rem] md:w-[38rem] mx-[auto]">
                {colorList.map((color, idx) => (
                    <div className={`${isHover == idx ? 'opacity-30' : 'opacity-100'} transition duration-1000 w-[3.75rem] h-[3.75rem] sm:w-[7.5rem] sm:h-[7.5rem] md:w-[9rem] md:h-[9rem]`} style={{backgroundColor: `${color}`}} onMouseOver={() => setIsHover(idx)} onMouseOut={() => setIsHover(100)}></div>
                ))}
            </div>
        );
    } else {
        return(
            <div className="grid grid-cols-5 gap-2 flex justify-items-center w-[17rem] sm:w-[33rem] md:w-[38rem] mx-[auto]">
                {colorList.map((color, idx) => (
                    <div className={`${isHover == idx ? 'opacity-30' : 'opacity-100'} transition duration-1000 w-[3rem] h-[3rem] sm:w-[6rem] sm:h-[6rem] md:w-[7.2rem] md:h-[7.2rem]`} style={{backgroundColor: `${color}`}} onMouseOver={() => setIsHover(idx)} onMouseOut={() => setIsHover(100)}></div>
                ))}
            </div>
        );
    }
    
}

export default Pallete;