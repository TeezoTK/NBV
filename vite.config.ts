import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify("/"),
  },

  plugins: [react()],
  base: "/",

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
