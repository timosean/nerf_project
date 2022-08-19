import { atom } from 'recoil';

const colorState = atom({
    key: 'colorState',
    default: '#FFFFFF',
});

const modalState = atom({
    key: 'modalState',
    default: false,
});

const simState = atom({
    key: 'simState',
    default: 0,
});

// const arrState = atom({
//     key: 'arrState',
//     default: ['#708090', '#B46648', '#DFD2A9', '#CCB67D', '#D1B67B'],
// });

const arrState = atom({
    key: 'arrState',
    default: [
        {
            'code': '#708090',
            'text': 'default'
        },
        {
            'code': '#B46648',
            'text': 'default'
        },
        {
            'code': '#DFD2A9',
            'text': 'default'
        },
        {
            'code': '#CCB67D',
            'text': 'default'
        },
        {
            'code': '#D1B67B',
            'text': 'default'
        }
    ],
});

export { colorState, modalState, simState, arrState };
