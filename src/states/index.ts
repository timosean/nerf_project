import { atom } from 'recoil';

const colorState = atom({
    key: 'colorState',
    default: '#FFFFFF',
});

const modalState = atom({
    key: 'modalState',
    default: false,
});

export { colorState, modalState };
