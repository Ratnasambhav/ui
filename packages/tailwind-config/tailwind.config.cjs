const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Atkinson Hyperlegible", ...defaultTheme.fontFamily.sans],
        'serif': ['Editorial New', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "background": "var(--color-bg)",

        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",
        "primary-3": "var(--primary-3)",
        "primary-4": "var(--primary-4)",
        "primary-5": "var(--primary-5)",
        "primary-6": "var(--primary-6)",
        "primary-7": "var(--primary-7)",
        "primary-8": "var(--primary-8)",
        "primary-9": "var(--primary-9)",
        "primary-10": "var(--primary-10)",
        "primary-11": "var(--primary-11)",
        "primary-12": "var(--primary-12)",

        "primary-contrast": "var(--primary-contrast)",
        "primary-surface": "var(--primary-surface)",
        "primary-indicator": "var(--primary-indicator)",
        "primary-track": "var(--primary-track)",

        "text-main": "var(--primary-12)",
        "text-sub": "var(--primary-11)",

        "surface-1": "var(--primary-1)",
        "surface-2": "var(--primary-2)",
        "surface-3": "var(--primary-3)",
      }
    },
  },
  plugins: [],
}
