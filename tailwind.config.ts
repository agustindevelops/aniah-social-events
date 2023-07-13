import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        ...colors,
        cream: '#FFFCF9',
        brown: {
          50: '#f9f4f1',
          100: '#f3e8e3',
          200: '#e6d2c9',
          300: '#d8bbae',
          400: '#be8e7a',
          500: '#9B4922', // Use #9B4922 as the default color
          600: '#7c3a1c',
          700: '#652f17',
          800: '#4e2412',
          900: '#3b1b0e',
        },
        peach: {
          50: '#ffedeb',
          100: '#ffe2d7',
          200: '#FFAFAF',
          300: '#ffbc92',
          400: '#FFBC5B',
          500: '#FF934E',
          600: '#ff721b',
          700: '#e65c08',
          800: '#b34706',
          900: '#802d04',
        },
        blue: {
          50: '#E6F7FA',
          100: '#C0EAF3',
          200: '#9ADDEB',
          300: '#75D0E4',
          400: '#4FC2DC',
          500: '#3DB1C5',
          600: '#2F9BAE',
          700: '#237F94',
          800: '#18647A',
          900: '#0D4A61',
        },
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
