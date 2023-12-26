/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark': '#111827',
        'primary': '#9F81CD',
        'secondary': '#766DC1',
        'warning': '#EBB2D6',
        'danger': '#F198AF',
        'light': '#FBD1D3'
      },
      backgroundColor: {
        'dark': '#111827',
        'primary': '#9F81CD',
        'secondary': '#766DC1',
        'warning': '#EBB2D6',
        'danger': '#F198AF',
        'light': '#FBD1D3'
      },
      borderColor: {
        'dark': '#111827',
        'primary': '#9F81CD',
        'secondary': '#766DC1',
        'warning': '#EBB2D6',
        'danger': '#F198AF',
        'light': '#FBD1D3'
      }
    },
  },
  plugins: [
    require('tailwind-clip-path')
  ],
}
