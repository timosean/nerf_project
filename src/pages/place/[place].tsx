import { useRouter } from 'next/router';
import PalleteSlider from '../../components/PalleteSlider';
import dataList from '../../constants/dataList';
import { modalState, colorState } from '../../states/index';
import { useRecoilState } from 'recoil';
import ColorModal from '../../components/ColorModal';
import { useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';

//원래 높이는 h-[calc(100vh-5vw-2.5rem)] 이거였음.

interface DataType {
    name: string;
    place: string;
    colorList3: string[];
    colorList4: string[];
    colorList5: string[];
}

function ColorSample({ placename }: { placename?: string }) {
    const placeColorData = dataList.find(elem => elem.place == placename)?.colorList3;
    return (
        <div className="w-full flex space-x-0 justify-center">
            {placeColorData?.map(color => (
                <div className={`w-5 h-5`} style={{ backgroundColor: `${color}` }} key={color}></div>
            ))}
        </div>
    );
}

function Introduce({ placename }: { placename?: string }) {
    return (
        <div className="relative w-full h-full md:h-48 pt-32">
            <h1 className="font-lexend relative text-6xl w-full text-center mb-20">{placename}</h1>
            <ColorSample placename={placename} />
            <div className="flex justify-center mt-20">
                <article className="w-4/12 lg:w-2/12 font-NotoSerifKR text-sm lg:text-base">
                    용산 미군기지는 엄청 좋아 개꿀 나이따 용산 미군기지는 엄청 좋아 개꿀 나이따 용산 미군기지는 엄청 좋아 개꿀 나이따 용산 미군기지는 엄청 좋아 개꿀 나이따
                </article>
            </div>
            <div className="flex items-center justify-center mt-[10vh] animate-bounce">
                <BsChevronDown size={20} />
            </div>
        </div>
    );
}

function Place() {
    const router = useRouter();
    const { place } = router.query;
    const [modal, setModal] = useRecoilState(modalState);
    const [color, setColor] = useRecoilState(colorState);

    useEffect(() => {
        function introFadeIn() {
            const introSection = document.querySelector('#intro-section') as HTMLElement;
            introSection?.classList.replace('opacity-0', 'opacity-100');
        }

        introFadeIn();
    }, []);

    useEffect(() => {
        const placeWrapper = document.querySelector('#place-wrapper') as HTMLDivElement;
        placeWrapper?.addEventListener(
            'wheel',
            function (e) {
                e.preventDefault();

                const paletteWrapper = document.querySelector('#palette-wrapper') as HTMLElement;

                //스크롤을 아래로 내리면 팔레트가 올라오고, 위로 올리면 팔레트가 내려간다.
                if (e.deltaY > 0) {
                    paletteWrapper?.classList.replace('top-[calc(100vh)]', 'lg:top-[calc(2.5rem)]');
                    paletteWrapper?.classList.add('top-0');
                } else {
                    paletteWrapper?.classList.replace('lg:top-[calc(2.5rem)]', 'top-[calc(100vh)]');
                    paletteWrapper?.classList.remove('top-0');
                }
            },
            { passive: false },
        );
    });

    // dataList 배열에서 이름 검사하는 함수
    const isPlace = (element: DataType) => {
        return element.place === place?.toString();
    };

    // dataList에서 이름이 같은 element를 data에 할당
    const data: DataType | undefined = dataList.find(isPlace);

    //undefined, null 등을 체크
    if (!data) {
        return null;
    }

    return (
        <div className="flex flex-col justify-center items-center" id="place-wrapper">
            <ColorModal color={color} />
            <section className="w-full h-full md:h-[calc(100vh-5vw-2.5rem)] opacity-0 duration-[2400ms]" id="intro-section">
                <Introduce placename={place?.toString()} />
            </section>
            <section className="w-full h-[100vh] h-[calc(100vh-5vw-2.5rem)] absolute top-[calc(100vh)] bg-white flex items-center justify-center transition-all duration-1000" id="palette-wrapper">
                <PalleteSlider colorList3={data.colorList3} colorList4={data.colorList4} colorList5={data.colorList5}></PalleteSlider>
            </section>
        </div>
    );
}

export default Place;
