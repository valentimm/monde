/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    colors: {
      'primary-100':'#8f7a66', // dark brown
      'primary-200':'#c0a994', // light brown
      'primary-300':'#fffff7', // white
      'accent-100':'#b5ead7', // light green
      'accent-200':'#568877', // dark green
      'text-100':'#353535', // black
      'text-200':'#5f5f5f', // gray
      'bg-100':'#d5c3b3', // light brown
      'bg-200':'#cbb9a9', // light brown
      'bg-300':'#a39383', // dark brown
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#F5F5F5',
      },
    },
  },
  plugins: [],
}

