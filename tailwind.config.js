/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'matrix-pattern': "url('/img/0011.png')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: true,
  },
};
