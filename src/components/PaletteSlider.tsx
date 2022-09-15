import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Palette from './Palette';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';

// 캐러셀 커스텀 화살표 props
interface CustomArrowsProps {
    className?: any;
    style?: any;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// 캐러셀 슬라이더 props
interface SliderProps {
    colorList3: string[];
    colorList4: string[];
    colorList5: string[];
}

function CustomNextArrows({ className, style, onClick }: CustomArrowsProps) {
    return (
        <div className={`${className} white-arrow`} style={{ ...style, right: '0px' }} onClick={onClick}>
            <div className="flex items-center absolute left-16 mt-[5.4rem] sm:mt-[13.3rem] md:mt-[15.5rem]">
                <BsChevronCompactRight size={40} fill="#D6D3D2" />
            </div>
        </div>
    );
}
function CustomPrevArrows({ className, style, onClick }: CustomArrowsProps) {
    return (
        <div className={`${className} white-arrow`} style={{ ...style, left: '0px' }} onClick={onClick}>
            <div className="flex items-center absolute right-16 mt-[5.4rem] sm:mt-[13.3rem] md:mt-[15.5rem]">
                <BsChevronCompactLeft size={40} fill="#D6D3D2" />
            </div>
        </div>
    );
}

// 캐러셀
function PaletteSlider({ colorList3, colorList4, colorList5 }: SliderProps) {
    const settings = {
        fade: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrows />,
        prevArrow: <CustomPrevArrows />,
    };

    return (
        <div className="flex justify-center flex-row items-center" style={{ minWidth: '360px' }}>
            <Slider className="flex flex-row h-full w-full" {...settings}>
                <Palette colorList={colorList3}></Palette>
                <Palette colorList={colorList4}></Palette>
                <Palette colorList={colorList5}></Palette>
            </Slider>
        </div>
    );
}

export default PaletteSlider;
