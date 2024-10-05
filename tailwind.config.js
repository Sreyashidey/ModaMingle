
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',    // Scans all EJS templates
    './routes/**/*.js',    // Scans route files
    './public/js/**/*.js', // Scans JS files in public/js (if using Tailwind classes in JS)
    // Add other paths if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['"Helvetica Now Display"', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
};

