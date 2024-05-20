/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor:{
        'tertary-dark': '#4b49ac',
        'tertary-light': '#a1a0d8',
        'tertary-hover': '#dfe4ff',
        'secondary-dark': '#1a1a1a',
        'secondary-light': '#333333',
        'primary-dark': '#fafafa',
        'primary-light': '#ffffff',
        'green-dark': '#04a604',
        'green-light': '#A6ffa6',
        'yellow-dark': '#f7c100',
        'yellow-light': '#fee17c',
        'red-dark': '#ff6347',
        'red-light': '#fab2a5',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1032px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    }
  },
  
  plugins: []
};