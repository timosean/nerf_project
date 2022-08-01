import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { colorState, modalState } from '../states/index';

// 컬러코드가 담겨있는 배열 ex) colorList3, colorList4, colorList5
interface PalleteProps {
    colorList: string[];
}

function Pallete({ colorList }: PalleteProps) {
    const WHITE = 'FFFFFF';
    const BLACK = '000000';

    //모달 창 Open에 대한 효과 주기
    function onModalOpen() {
        const modalBackground = document.querySelector('#modal-background') as HTMLDivElement;
        const modal = document.querySelector('#modal') as HTMLDivElement;

        modalBackground.classList.replace('opacity-0', 'opacity-100');
        modalBackground.classList.remove('top-full');
        modalBackground.classList.add('top-0', 'bottom-0');

        modal.classList.replace('opacity-0', 'opacity-100');
        modal.classList.replace('-translate-y-[1000%]', '-translate-y-[50%]');
    }

    //배경색에 따라서 흰색,검은색 중 텍스트가 더 잘 보이는 색깔 정하기
    function colorDetermine(color: string) {
        const hexvalue = color.substring(1);
        const black_value = parseInt(BLACK, 16);
        const white_value = parseInt(WHITE, 16);

        const diff_black = parseInt(hexvalue, 16) - black_value;
        const diff_white = white_value - parseInt(hexvalue, 16);

        if (diff_black < diff_white) {
            return 'white';
        } else return 'black';
    }

    // 컬러 위에 커서 올렸을 때, opacity 설정
    const [isHover, setIsHover] = useState(100);

    // colorList.length에 따라서 3x3, 4x4, 5x5 팔레트 중 무엇을 보여줄 지 결정
    const cnt: number = Math.sqrt(colorList.length);

    const [modal, setModal] = useRecoilState(modalState);
    const [color, setColor] = useRecoilState(colorState);

    return cnt == 3 ? (
        <div className="grid grid-cols-3 gap-2 sm:gap-4 flex justify-items-center w-[17rem] sm:w-[33rem] md:w-[38rem] mx-[auto]">
            {colorList.map((color, idx) => (
                <div
                    className={`w-[5.3rem] h-[5.3rem] sm:w-[10.3rem] sm:h-[10.3rem] md:w-[12rem] md:h-[12rem] flex items-end px-1.5 py-1 md:p-2 cursor-pointer`}
                    style={{ backgroundColor: `${color}` }}
                    onMouseOver={() => setIsHover(idx)}
                    onMouseOut={() => setIsHover(100)}
                    key={`${color}.${idx}`}
                    onClick={() => {
                        setModal(true);
                        setColor(color);
                        onModalOpen();
                    }}
                >
                    <span className={`transition-all duration-700 ease-out text-sm md:text-lg lg:text-xl font-normal text-white ${isHover == idx ? 'opacity-100' : 'opacity-0'}`}>{color}</span>
                </div>
            ))}
        </div>
    ) : cnt == 4 ? (
        <div className="grid grid-cols-4 gap-1.5 sm:gap-3 flex justify-items-center w-[17rem] sm:w-[33rem] md:w-[38rem] mx-[auto]">
            {colorList.map((color, idx) => (
                <div
                    className={`w-[4rem] h-[4rem] sm:w-[7.5rem] sm:h-[7.5rem] md:w-[9rem] md:h-[9rem] flex items-end px-1.5 py-[0.05rem] md:p-2 cursor-pointer`}
                    style={{ backgroundColor: `${color}` }}
                    onMouseOver={() => setIsHover(idx)}
                    onMouseOut={() => setIsHover(100)}
                    key={`${color}.${idx}`}
                    onClick={() => {
                        setModal(true);
                        setColor(color);
                        onModalOpen();
                    }}
                >
                    <span
                        className={`transition-all duration-700 ease-out text-[0.5rem] md:text-lg lg:text-lg font-normal text-${colorDetermine(color)} ${isHover == idx ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {color}
                    </span>
                </div>
            ))}
        </div>
    ) : (
        <div className="grid grid-cols-5 gap-2 flex justify-items-center w-[17rem] sm:w-[33rem] md:w-[38rem] mx-[auto]">
            {colorList.map((color, idx) => (
                <div
                    className={`transition duration-7000 w-[3rem] h-[3rem] sm:w-[6rem] sm:h-[6rem] md:w-[7.2rem] md:h-[7.2rem] cursor-pointer`}
                    style={{ backgroundColor: `${color}` }}
                    onMouseOver={() => setIsHover(idx)}
                    onMouseOut={() => setIsHover(100)}
                    key={`${color}.${idx}`}
                ></div>
            ))}
        </div>
    );
}

export default Pallete;
