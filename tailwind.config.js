/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0B1F17',
          deep: '#081711',
          panel: '#142A20',
          line: '#22402F',
        },
        burgundy: {
          DEFAULT: '#5C0A1E',
          deep: '#3D0712',
          bright: '#7A1228',
        },
        gold: {
          DEFAULT: '#C9A04D',
          antique: '#B68A3E',
          champagne: '#F0D49C',
          bright: '#E8C374',
          deep: '#8C6A2C',
        },
        ivory: {
          DEFAULT: '#F5EFE2',
          dim: '#DCD3BF',
          muted: '#B9AE99',
        },
        walnut: {
          DEFAULT: '#3D2817',
          deep: '#2A1B0F',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
        widest3: '0.5em',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        gold: '0 0 40px -10px rgba(201,160,77,0.35)',
        panel: '0 25px 60px -20px rgba(0,0,0,0.6)',
      },
      transitionTimingFunction: {
        regal: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
