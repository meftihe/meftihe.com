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
      160: '160px',
    },
    extend: {
      brightness: {
        max: '1003%',
      },
    },
  },
  safeList: [
    "after:bg-[url('title_shap1.png']",
    "after:bg-[url('title_shap2.png']",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: true,
  },
};
