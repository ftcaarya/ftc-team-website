/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#ff4081',
        dark: '#121212',
        light: '#f7f7f7',
        accent: '#00ffff',
        success: '#00c853',
        warning: '#ffd600',
        error: '#ff3d00',
      },
      fontFamily: {
        'exo': ['"Exo 2"', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'tech': '0 0 15px rgba(0, 255, 255, 0.5)',
        'tech-hover': '0 15px 30px rgba(0, 255, 255, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'circuit-pattern': "url('../src/assets/images/circuit-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-tech': 'linear-gradient(90deg, var(--primary), var(--secondary))',
      },
    },
  },
  plugins: [],
} 