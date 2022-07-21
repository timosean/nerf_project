import { useRouter } from 'next/router';
import PalleteSlider from '../../components/PalleteSlider';
import dataList from '../../dataList';

interface DataType {
    name: string;
    place: string;
    colorList3: string[];
    colorList4: string[];
    colorList5: string[];
}

function Place() {
    const router = useRouter();
    const { name } = router.query;

    // dataList 배열에서 이름 검사하는 함수
    const isName = (element: DataType) => {
        return element.name === name?.toString();
    };

    // dataList에서 이름이 같은 element를 data에 할당
    const data: DataType | undefined = dataList.find(isName);

    if (!data) {
        //undefined, null 등을 체크
        return null;
    }

    return (
        <div>
            <section className="w-full h-[calc(100vh-5vw-2.5rem)] flex items-center justify-center">
                <PalleteSlider colorList3={data.colorList3} colorList4={data.colorList4} colorList5={data.colorList5}></PalleteSlider>
            </section>
        </div>
    );
}

export default Place;
