/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linen: '#F8EFE0',
        paper: '#F2E3CC',
        ink: '#2A2019',
        fig: '#A23A22',
        sage: '#82935C',
        'sage-light': '#A7BD82',
        moss: '#4F5E2C',
        gold: '#E7AE52',
        'gold-deep': '#CE8F37',
        sand: '#E6D3B3',
        dusk: '#18120C',
        'dusk-2': '#221A12',
        fern: '#5C6B3A',
        rattan: '#AD7A45',
        lava: '#FF5A2B',
        'lava-deep': '#E1431A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'reveal-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'reveal-in': 'reveal-in 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
