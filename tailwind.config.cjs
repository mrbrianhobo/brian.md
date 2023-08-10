/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {
      backgroundImage: {
        dots: 'var(--dots)',
      },
      boxShadow: {
        toast: 'var(--box-shadow-toast-dark)',
      },
      colors: {
        body: 'rgb(var(--body))',
        background: 'rgb(var(--background))',
        accent: 'rgb(var(--color-accent))',
        muted: 'rgb(var(--color-muted))',
        toast: 'rgb(var(--toast))',
        button: 'rgb(var(--button))',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
        code: ['"JetBrains Mono"'],
        pixel: ['Mondwest'],
      },
      listStyleType: {
        bracket: '"> "',
      }
    },
	},
	plugins: [],
}
