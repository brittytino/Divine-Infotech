/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        'slow-bounce': 'bounce 4s infinite',
    }

    },
  },
  plugins: [],
}

