import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: "globalThis",
    __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
  },
  server: {
    port: 5173,
    host: true,
    strictPort: true,
  },
  preview: {
    port: 4173,
    host: true,
    strictPort: true,
  },
  build: {
    target: "es2015",
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          tanstack: ["@tanstack/react-query"],
          radix: ["@radix-ui/react-dialog", "@radix-ui/react-slot"],
        },
        chunkFileNames: "[name]-[hash].js",
        entryFileNames: "index-[hash].js",
        assetFileNames: "index-[hash].[ext]",
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-query",
    ],
  },
});
