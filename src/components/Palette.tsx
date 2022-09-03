import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { colorState, modalState, simState, arrState } from '../states/index';
import PaletteWheelEvent from '../utils/WheelEvent';
import colorTextList from '../constants/colorTextList';
import similarColorList from '../constants/similarColorList';
import { PaletteProps, arrProps } from '../utils/interface';

function Palette({ colorList }: PaletteProps) {
    const [modal, setModal] = useRecoilState(modalState);
    const [color, setColor] = useRecoilState(colorState);
    const [sim, setSim] = useRecoilState(simState);
    const [arr, setArr] = useRecoilState(arrState);

    let similarColors: string[] | undefined = [];

    const WHITE = 'FFFFFF';
    const BLACK = '000000';

    //이러면 안되는데 color변할때마다 찾으면 없는 색깔나오면 에러남.....
    useEffect(() => {
        similarColors = similarColorList.find(elem => elem.code == color)?.similars;
    }, []);

    function onModalOpen() {
        var simCnt = 0;
        const modalBackground = document.querySelector('#modal-background') as HTMLDivElement;
        const modal = document.querySelector('#modal') as HTMLDivElement;

        modalBackground.classList.replace('opacity-0', 'opacity-100');
        modalBackground.classList.remove('top-full');
        modalBackground.classList.add('top-0', 'bottom-0');

        modal.classList.replace('opacity-0', 'opacity-100');
        modal.classList.replace('-translate-y-[1000%]', '-translate-y-[50%]');

        //2022-08-16 추가 분
        const placeWrapper = document.querySelector('#place-wrapper') as HTMLDivElement;
        placeWrapper.removeEventListener('wheel', PaletteWheelEvent);

        //modal close에 removeEventListener 해줘야 하나 했는데... 어차피 모달 내려가니까 굳이 리무브 안해도 되지않을까?
        modal.addEventListener(
            'wheel',
            function (e) {
                e.preventDefault();

                if (e.deltaY > 0 && simCnt < 4) {
                    simCnt++;
                    setSim(simCnt);
                } else if (e.deltaY < 0 && simCnt > 0) {
                    simCnt--;
                    setSim(simCnt);
                }
            },
            { passive: false },
        );
    }

    function makeColorList(color: string) {
        const data = similarColorList.find(elem => elem.code == color);
        var result: arrProps[] = [];
        var similars: string[];
        if (!data) {
            similars = ['#708090', '#B46648', '#DFD2A9', '#CCB67D', '#D1B67B'];
        } else {
            similars = data.similars;
        }

        for (var i in similars) {
            const textData = colorTextList.find(elem => elem.code == similars[i]);
            if (!textData) {
                result.push({ code: similars[i], text: 'not in data' });
            } else {
                result.push({ code: textData.code, text: textData.text });
            }
        }
        console.log(result);

        setArr(result);
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

    return cnt == 3 ? (
        <div className="grid grid-cols-3 gap-2 sm:gap-4 flex justify-items-center w-[17rem] sm:w-[33rem] md:w-[38rem] mx-[auto]">
            {colorList.map((color, idx) => (
                <div
                    className={`w-[5.3rem] h-[5.3rem] sm:w-[10.3rem] sm:h-[10.3rem] md:w-[12rem] md:h-[12rem] flex items-end p-1 sm:p-1.5 md:p-2 cursor-pointer`}
                    style={{ backgroundColor: `${color}` }}
                    onMouseOver={() => setIsHover(idx)}
                    onMouseOut={() => setIsHover(100)}
                    key={`3_${color}.${idx}`}
                    onClick={() => {
                        makeColorList(color);
                        setModal(true);
                        setColor(color);
                        onModalOpen();
                    }}
                >
                    <span
                        className={`transition-all duration-700 ease-out text-[0.875rem] md:text-[1.125rem] lg:text-[1.25rem] font-normal leading-none text-white ${
                            isHover == idx ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {color}
                    </span>
                </div>
            ))}
        </div>
    ) : cnt == 4 ? (
        <div className="grid grid-cols-4 gap-1.5 sm:gap-3 flex justify-items-center w-[17rem] sm:w-[33rem] md:w-[38rem] mx-[auto]">
            {colorList.map((color, idx) => (
                <div
                    className={`w-[4rem] h-[4rem] sm:w-[7.5rem] sm:h-[7.5rem] md:w-[9rem] md:h-[9rem] flex items-end p-1 sm:p-1.5 md:p-2 cursor-pointer`}
                    style={{ backgroundColor: `${color}` }}
                    onMouseOver={() => setIsHover(idx)}
                    onMouseOut={() => setIsHover(100)}
                    key={`4_${color}.${idx}`}
                    onClick={() => {
                        makeColorList(color);
                        setModal(true);
                        setColor(color);
                        onModalOpen();
                    }}
                >
                    <span
                        className={`transition-all duration-700 ease-out text-[0.5rem] md:text-[1.125rem] lg:text-[1.125rem] font-normal leading-none text-${colorDetermine(color)} ${
                            isHover == idx ? 'opacity-100' : 'opacity-0'
                        }`}
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
                    key={`5_${color}.${idx}`}
                ></div>
            ))}
        </div>
    );
}

export default Palette;
