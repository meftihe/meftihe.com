/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md',
  ],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      80: '80%',
    },
    transitionDuration: {
      xl: '100000ms',
    },
    extend: {
      backgroundImage: {
        'matrix-pattern': "url('0011.png')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: true,
  },
};
