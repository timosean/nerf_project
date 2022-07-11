/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
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
