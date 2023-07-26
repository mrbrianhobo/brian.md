/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        background: 'rgb(var(--color-background))',
        accent: 'rgb(var(--color-accent))',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
        pixel: ["Mondwest", ...defaultTheme.fontFamily.serif],
      },
      listStyleType: {
        bracket: '"> "',
      }
    },
	},
	plugins: [],
}
