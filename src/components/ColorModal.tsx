function ColorModal({ color }: { color: string }) {
    return (
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
            <div className="w-64 h-64 bg-white p-4">
                <h1>{color}</h1>
            </div>
        </div>
    );
}

export default ColorModal;
