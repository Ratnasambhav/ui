import { resolve } from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "/src/main.ts"),
      formats: ["es"],
      name: "ui-lib",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          Vue: "vue",
        },
      },
    },
    watch: {
      include: "/src/**",
    },
    target: 'esnext',
  },
  plugins: [vue(), dts()],
});
