/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                xlg: "1440px",
            },
            width: {
                1440: "1440px",
                625: "625px",
                111: "111px",
                815: "815px",
            },
            spacing: {
                18: "71px",
                138: "138px",
            },
            height: {
                "ds-129": "129px",
                "ds-42": "42px",
            },
            fontSize: {
                "fs-47": "47px",
            },
            fontFamily: {
                "inter-regular": ["Inter Regular"],
                "outifit-medium": ["Outfit Medium"],
            },
        },
    },
    plugins: [],
};
