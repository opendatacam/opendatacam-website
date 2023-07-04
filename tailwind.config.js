// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false, // disable Tailwind's reset
    },
    content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"],
    // hooks into docusaurus' dark mode settings
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {},
    },
    plugins: [],
}