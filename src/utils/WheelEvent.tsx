const PaletteWheelEvent = function (e: WheelEvent) {
    e.preventDefault();

    const paletteWrapper = document.querySelector('#palette-wrapper') as HTMLDivElement;

    if (e.deltaY > 0) {
        paletteWrapper.classList.replace('top-[calc(100vh)]', 'lg:top-[calc(2.5rem)]');
        paletteWrapper.classList.add('top-0');
    } else {
        paletteWrapper.classList.replace('lg:top-[calc(2.5rem)]', 'top-[calc(100vh)]');
        paletteWrapper.classList.remove('top-0');
    }
}

export default PaletteWheelEvent;