/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        spirit: {
          night: '#0f1f2e',
          dusk: '#1a3347',
          mist: '#2d5a6b',
          water: '#4a8fa8',
          grass: '#3d6b4f',
          cream: '#f5e6d3',
          paper: '#faf3e8',
          gold: '#d4a853',
          lantern: '#f0c674',
          vermillion: '#c0392b',
          crimson: '#8b1a1a',
          wood: '#5c3d2e',
        },
      },
      fontFamily: {
        display: ['"Noto Serif JP"', 'Georgia', 'serif'],
        body: ['"Zen Kaku Gothic New"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        lantern: '0 0 30px rgba(240, 198, 116, 0.35), 0 0 60px rgba(212, 168, 83, 0.15)',
        card: '0 20px 50px rgba(15, 31, 46, 0.45), inset 0 1px 0 rgba(250, 243, 232, 0.08)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        drift: 'drift 20s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
      },
      backgroundImage: {
        'spirit-sky':
          'linear-gradient(180deg, #0f1f2e 0%, #1a3347 30%, #2d5a6b 55%, #3d6b4f 80%, #2a4a38 100%)',
        'torii-red':
          'linear-gradient(180deg, #c0392b 0%, #8b1a1a 100%)',
        'gold-shimmer':
          'linear-gradient(90deg, transparent, rgba(240,198,116,0.3), transparent)',
      },
    },
  },
  plugins: [],
};
