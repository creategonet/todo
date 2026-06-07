import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5a1b',
          dark: '#1a3c0c',
          light: '#4a8029',
          lighter: '#6aaa52',
        },
        accent: '#8B3A1A',
      },
    },
  },
  plugins: [],
}
export default config
