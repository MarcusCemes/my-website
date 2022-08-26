const { fontFamily } = require("tailwindcss/defaultTheme");
const { neutral } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                gray: neutral,
            },
            fontFamily: {
                inter: ["Inter", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
