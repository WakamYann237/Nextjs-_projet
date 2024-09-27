// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Inclure tous les fichiers dans le dossier 'pages'
    './components/**/*.{js,ts,jsx,tsx}', // Inclure tous les fichiers dans le dossier 'components'
    './app/**/*.{js,ts,jsx,tsx}', // Inclure tous les fichiers dans le dossier 'app'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #2B2F53 3.16%, #1D1C34 36.05%)',
      },
      fontSize: {
        '20px': '20px',
      },
      boxShadow: {
        'custom-shadow': '40px 60px 150px 0px #3B267BB2',
      },
    },
  },
  plugins: [],
};
