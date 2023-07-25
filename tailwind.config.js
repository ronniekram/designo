/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        current: `currentColor`,
        transparent: `transparent`,
        black: `#1D1C1E`,
        white: `#FFFFFF`,
        grey: {
          100: `#F1F3F5`,
          200: `#333136`,
        },
        peach: {
          100: `#FDF3F0`,
          200: `#FFAD9B`,
          300: `#E7816B`,
        },
      },
      fontSize: {
        body: [`16px`, `26px`],
        h1: [`48px`, `48px`],
        h2: [`40px`, `48px`],
        h3: [`20px`, `26px`],
        button: [`15px`],
        input: [`15px`, `28px`],
      },
      fontWeight: {
        xthin: 100,
        thin: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semi: 600,
        bold: 700,
        xbold: 800,
        black: 900,
      },
      fontFamily: {
        sans: [`var(--sans)`],
      },
    },
  },
};
