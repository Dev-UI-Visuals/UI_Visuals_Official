
tailwind.config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-main': "#ededed",
        'primary-mid': "#fafafa",
        'primary-light': "#ffffff",
        'secondary-main': "#74c042",
        'secondary-light': "#73cb43",
        'secondary-dark': "#8a8a8a",
        'text-main': "#3a3a3c",
        'text-mid': "#585858",
        'text-light': '#6b7070',
        'nav-main': 'rgb(250, 250, 250,0.9)',
        'nav-light': 'rgb(250, 250, 250,0.8)',
      },
      fontSize: {
        xxxxl: "60px",
        xxxl: "50px",
        xxl: '40px',
        xl: '35px',
        lg: "30px",
        ic:"24px",
        md: "22px",
        rg: "20px",
        sm: "18px",
        xs: "16px",
        xxs: "14px",
        xxxs: "12px"
      },
      fontWeight: {
        b: '800',
        sb: '700',
        md: '600',
        r: '500',
        l: '400'
      },
      screens:{
        xl:"1500px"
      }

    },
  },
  plugins: [],
}
