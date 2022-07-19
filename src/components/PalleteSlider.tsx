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

// 캐러셀 커스텀 화살표 함수 - 좀 많이 갈아줘야할 듯 ㅋㅋ;
function CustomArrows({className, style, onClick}: CustomArrowsProps) {

    return (<div className={className} style={{...style, display: "block", backgroundColor: "green", width: "50px"}} onClick={onClick}></div>);
}

// 캐러셀 
function PalleteSlider({colorList3, colorList4, colorList5}: SliderProps) {
    useEffect(() => {
        const script1 = document.createElement("script");
        script1.src = "https://"
    })

    //slick opacity 조절해주려면 css 건드려야할 것 같은데 잘 모르겠당 ㅎ;
    const settings = {
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'cubic-bezier(.3,.7,1,1)',
        nextArrow: <CustomArrows className="grow" />,
        prevArrow: <CustomArrows className="grow" />
    }

    return (
        <div className="flex flex-row" style={{minWidth: "550px"}}>
            <Slider className="h-full w-[32rem] sm:w-[40rem] md:w-[45rem] mx-auto" {...settings}>
                <div>
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