import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        login: resolve(root, "login", "index.html"),
        register: resolve(root, "register", "index.html"),
        test: resolve(root, "test", "index.html"),
      },
    },
  },
});
