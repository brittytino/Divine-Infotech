/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                // Define your custom colors here
                primary: '#3B82F6', // Example primary color
                // Add more colors as needed
            },
            boxShadow: {
                'modal': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
            },
        },
    },
    plugins: [],
};
