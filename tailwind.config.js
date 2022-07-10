/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                ourBlack: '#1D1D1D',
                outWhite: '#F8F8F8',
            },
        },
    },
    plugins: [],
};
