import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'metropolis': ['Metropolis', 'Open Sans', 'sans-serif']
      },
      screens: {
        '3xl': '2560px',
      }
    }
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
    require('./breakpointInspector')
  ],
  daisyui: {
    styled: false
  }
}
export default config
