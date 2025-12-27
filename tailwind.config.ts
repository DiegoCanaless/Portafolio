import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#131314",
                secondary: "#10b981",
                light: "#FFFFFF",
                opaque: "#000000"
            },
        },
    },
    plugins: [],
};

export default config;