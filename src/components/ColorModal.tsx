import { MdOutlineClose } from 'react-icons/md';
import { modalState } from '../states/index';
import { useRecoilState } from 'recoil';

function ColorModal({ color, isOpen }: { color: string; isOpen: boolean }) {
    const [modal, setModal] = useRecoilState(modalState);

    return (
        <>
            <div
                className={`${modal ? 'opacity-100 top-0 bottom-0' : 'opacity-0 top-full'} transition-opacity absolute left-0 right-0 bg-[rgba(0,0,0,0.4)] z-30 px-[6vw] md:px-[3vw]`}
                onClick={() => setModal(false)}
            ></div>
            <div
                className={`${
                    modal ? 'opacity-100 -translate-y-[50%]' : 'opacity-0 -translate-y-[1000%]'
                } transition-opacity absolute top-[55%] left-[50%] -translate-x-[50%] flex w-5/6 lg:w-4/6 h-[43rem] bg-[rgba(229,231,235,0.4)] backdrop-blur-3xl p-4 rounded-xl z-40`}
            >
                <h1>{color}</h1>
            </div>
        </>
    );
}

export default ColorModal;
