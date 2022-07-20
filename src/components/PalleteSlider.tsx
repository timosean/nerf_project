import React, {useEffect} from "react";
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

//왜 md:!w-[calc((100% - 38rem)/2)]는 안먹는 걸까
function CustomNextArrows({className, style, onClick}: CustomArrowsProps) {

    return (<div className={`${className} white-arrow`} style={{...style, right: "0px"}} onClick={onClick}/>);
}
function CustomPrevArrows({className, style, onClick}: CustomArrowsProps) {

    return (<div className={`${className} white-arrow`} style={{...style, left: "0px"}} onClick={onClick}/>);
}

// 캐러셀 
function PalleteSlider({colorList3, colorList4, colorList5}: SliderProps) {

    //slick opacity 조절해주려면 css 건드려야할 것 같은데 잘 모르겠당 ㅎ;
    const settings = {
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrows />,
        prevArrow: <CustomPrevArrows />
    }

    return (
        <div className="flex justify-center flex-row" style={{minWidth: "550px"}}>
            <Slider className="flex flex-row h-full w-full" {...settings}>
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
        </div>
    );
}

export default PalleteSlider;