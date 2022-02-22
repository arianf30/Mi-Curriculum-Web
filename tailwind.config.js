module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      arian: {
        blanco: '#e0e0e0',
        blanco2: '#bdbdbd',
        grisclaro: '#272527',
        grisclaro2: '#4A484A',
        grisoscuro: '#141414',
        grisoscuro2: '#181818',
        negro: '#040404',
        azul: '#398BDD',
        celeste: '#3FAEBA',
        verde: '#3FBA60',
        amarillo: '#FFB442',
        naranja: '#DF7A40',
        rojo: '#DA332A',
        rosa: '#D63777',
        lila: '#AD4BD6',
        scroll: 'rgba(74,72,74,0.6)'
      }
    },
    fontFamily: {
      sans: ['Raleway', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['Roboto Mono', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      keyframes: {
        bars: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
