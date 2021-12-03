const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,css}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: { '-1': '-1' },
      colors: {
        ching: {
          // 暗玉紫
          anyuzi: '#5c2223',
          // 嫣红
          yanhong: '#82111f',
          // 汉白玉
          hanbaiyu: '#f8f4ed',
          // 长石灰
          changshihui: '#363433',
        },
      },
      backgroundImage: {
        'page-texture':
          "url('https://www.transparenttextures.com/patterns/tileable-wood-colored.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
