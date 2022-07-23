import { MdOutlineClose } from 'react-icons/md';

function ColorModal({ color }: { color: string }) {
    return (
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center z-30 px-[6vw] md:px-[3vw]">
            <div className="w-full h-[43rem] bg-white p-4 rounded-xl mt-[5rem]">
                <h1>{color}</h1>
            </div>
        </div>
    );
}

export default ColorModal;
