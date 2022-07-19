import React from "react";
import Slider from "react-slick";
import Pallete from "./Pallete";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

// 캐러셀 커스텀 화살표 함수
function CustomArrows({className, style, onClick}: CustomArrowsProps) {

    return (<div className={className} style={{...style, display: "block", backgroundColor: "green"}} onClick={onClick}></div>);
}

// 캐러셀 
function PalleteSlider({colorList3, colorList4, colorList5}: SliderProps) {
    const setting = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomArrows />,
        prevArrow: <CustomArrows />
    }

    return (
        <Slider className="h-full">
            <div className="">
                <Pallete colorList={colorList3}></Pallete>
            </div>
            <div className="">
                <Pallete colorList={colorList4}></Pallete>
            </div>
            <div className="">
                <Pallete colorList={colorList5}></Pallete>
            </div>
        </Slider>
    );
}

export default PalleteSlider;