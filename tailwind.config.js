/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:         '#FAFAF8',
        surface:    '#FFFFFF',
        'surface-alt': '#F4F3EF',
        border:     '#E8E6DF',
        primary:    '#0B3D66',
        secondary:  '#5C5B57',
        muted:      '#9B9A95',
        accent:     '#126BB3',
        'accent-light': '#EEF2FF',
        'accent-green': '#059669',
        'accent-amber': '#D97706',
        blen:       '#2EA3B0',
        spark:      '#6E6E6E',
      },
      fontFamily: {
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2.4rem, 5vw, 4rem)',
        'section': 'clamp(1.8rem, 4vw, 2.8rem)',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        md: '0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05)',
        lg: '0 12px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)',
        xl: '0 20px 60px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F0F4FF 0%, #FAFAF8 50%, #F0FDF4 100%)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        gridFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up':     'fadeUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-up-d1':  'fadeUp 0.8s 0.2s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-up-d2':  'fadeUp 0.8s 0.4s cubic-bezier(0.4,0,0.2,1) forwards',
        'grid-float':  'gridFloat 8s ease-in-out infinite',
        'scale-in':    'scaleIn 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
      },
      maxWidth: {
        container: '1140px',
      }
    },
  },
  plugins: [],
}
