import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Palette from './Palette';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

//왜 md:!w-[calc((100% - 38rem)/2)]는 안먹는 걸까
function CustomNextArrows({ className, style, onClick }: CustomArrowsProps) {
    return <div className={`${className} white-arrow`} style={{ ...style, right: '0px' }} onClick={onClick} />;
}
function CustomPrevArrows({ className, style, onClick }: CustomArrowsProps) {
    return <div className={`${className} white-arrow`} style={{ ...style, left: '0px' }} onClick={onClick} />;
}

// 캐러셀
function PalleteSlider({ colorList3, colorList4, colorList5 }: SliderProps) {
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

export default PalleteSlider;
