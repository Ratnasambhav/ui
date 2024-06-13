/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  presets: [require("@ui/tailwind-config/tailwind.config.cjs")],
}
