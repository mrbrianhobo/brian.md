/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
	theme: {
		extend: {
      backgroundImage: {
        dots: 'var(--dots)',
      },
      colors: {
        background: 'rgb(var(--background))',
        accent: 'rgb(var(--color-accent))',
        muted: 'rgb(var(--color-muted))',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
        pixel: ["Mondwest"],
      },
      listStyleType: {
        bracket: '"> "',
      }
    },
	},
	plugins: [],
}
