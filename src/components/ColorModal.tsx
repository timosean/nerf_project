import { MdOutlineClose } from 'react-icons/md';
import { modalState } from '../states/index';
import { useRecoilState } from 'recoil';

function ColorModal({ color }: { color: string }) {
    const [modal, setModal] = useRecoilState(modalState);

    //바꾸고 싶으면 대충 이 함수 손봐서 넣으면 됨. 색에 opacity가 들어가야 blur처리가 되나봄.
    function hexToRgb(color: string, opac:string) {
        const hex: string = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16).toString();
        const g = parseInt(hex.substring(2, 4), 16).toString();
        const b = parseInt(hex.substring(4, 6), 16).toString();

        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opac + ')'
    }
    
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
                className={`opacity-0 top-full transition-opacity backdrop-blur duration-500 absolute left-0 right-0 z-30 px-[6vw] md:px-[3vw]`}
                style={{backgroundColor: `${hexToRgb(color, '0.7')}`}}
                onClick={() => {
                    onModalClose();
                    setModal(false);
                }}
                id="modal-background"
            ></div>
            <div
                id="modal"
                className={`opacity-0 -translate-y-[1000%] transition-opacity duration-500 absolute top-[55%] left-[50%] -translate-x-[50%] flex flex-col w-5/6 lg:w-4/6 h-[30rem] backdrop-blur-3xl p-6 rounded-xl z-40`}
                style={{backgroundColor: `${hexToRgb(color, '0.7')}`}}
            >
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white">{color}</h1>
                <p className="overflow-auto">${hexToRgb(color, '0.7')}</p>
            </div>
        </>
    );
}

export default ColorModal;
