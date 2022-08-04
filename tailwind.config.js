/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/layouts/**/*/.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                NotoSerifKR: ['Noto Serif KR', 'serif'],
                lexend: ['lexend', 'sans-serif'],
                evomedium: ['EVOMEDIUM', 'sans-serif'],
                evoregular: ['EVOREGULAR', 'sans-serif'],
            },
            colors: {
                ourBlack: '#1D1D1D',
                outWhite: '#F8F8F8',
            },
            keyframes: {
                topCross: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(-135deg)' },
                },
                bottomCross: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(135deg)' },
                },
            },
        },
    },
    plugins: [],
};
