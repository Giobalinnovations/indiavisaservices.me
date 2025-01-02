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
        primary: '#0891b2',
        secondary: '#334155',
        accent: '#0ea5e9',
        highlight: '#475569',
        success: '#16a34a',
        warning: '#d97706',
        error: '#dc2626',
        background: '#f0f9ff',
        orange: '#f97316',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateY(-100%) scale(1)', opacity: 0 },
          '50%': { transform: 'translateY(0) scale(1.2)', opacity: 1 },
          '100%': { transform: 'translateY(100%) scale(1)', opacity: 0 },
        },
        'matrix-reverse': {
          '0%': { transform: 'translateY(100%) scale(1)', opacity: 0 },
          '50%': { transform: 'translateY(0) scale(1.2)', opacity: 1 },
          '100%': { transform: 'translateY(-100%) scale(1)', opacity: 0 },
        },
      },
      animation: {
        matrix: 'matrix 4s ease-in-out infinite',
        'matrix-reverse': 'matrix-reverse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
