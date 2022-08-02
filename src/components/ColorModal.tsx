import { MdOutlineClose } from 'react-icons/md';
import { modalState } from '../states/index';
import { useRecoilState } from 'recoil';

function ColorModal({ color }: { color: string }) {
    const [modal, setModal] = useRecoilState(modalState);

    function onModalClose() {
        const modalBackground = document.querySelector('#modal-background') as HTMLDivElement;
        const modal = document.querySelector('#modal') as HTMLDivElement;

        modalBackground.classList.replace('opacity-100', 'opacity-0');
        modal.classList.replace('opacity-100', 'opacity-0');

        setTimeout(() => {
            modalBackground.classList.remove('top-0', 'bottom-0');
            modalBackground.classList.add('top-full');
            modal.classList.replace('-translate-y-[50%]', '-translate-y-[1000%]');
        }, 450);
    }

    return (
        <>
            <div
                className={`opacity-0 top-full transition-opacity duration-500 backdrop-blur absolute left-0 right-0 bg-[rgba(100,100,100,0.7)] z-30 px-[6vw] md:px-[3vw]`}
                onClick={() => {
                    onModalClose();
                    setModal(false);
                }}
                id="modal-background"
            ></div>
            <div
                id="modal"
                className={`opacity-0 -translate-y-[1000%] transition-opacity duration-500 absolute top-[55%] left-[50%] -translate-x-[50%] flex flex-col w-5/6 lg:w-4/6 h-[30rem] bg-[rgba(229,231,235,0.4)] backdrop-blur-3xl p-6 rounded-xl z-40`}
            >
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white">{color}</h1>
                <p className="overflow-auto">text</p>
            </div>
        </>
    );
}

export default ColorModal;
