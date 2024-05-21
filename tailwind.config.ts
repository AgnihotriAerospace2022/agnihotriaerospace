import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes : 
      {
          popup : {
            '0%':{
              transform : 'translateY(43vh)'
            }  ,
            '100%':{
              transform: 'translateY(-25vh)'
            }
          },
          popupSm : {
            '0%':{
              transform : 'translateY(43vh)'
            }  ,
            '100%':{
              transform: 'translateY(-18vh)'
            }
          },
          onScrollFade : {
            '0%':{
              transform : 'scale(0.8)',
              opacity :'0.4'

            }
            ,
            '100%':{
              transform :'scale(1)'  ,
              opacity :'1'
            }
          },
          onScrollAppear :
          {
            '0%':
            {

            },
            '100%':{
              transform : 'translateX(90vh)'
            }
          },
      },
      animation : 
      {
          popup : 'popup  .6s linear'  ,
          popupSm: 'popupSm .6s linear',
          onScrollAppear : 'onScrollAppear 1s ease-in' ,
          onScrollFade : 'onScrollFade .8s linear  forwards  ',
      }
    },
  },
  plugins: [],
}
export default config
