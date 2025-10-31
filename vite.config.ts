import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  build: {
    chunkSizeWarningLimit: 1024, // opcional, só pra reduzir o warning
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          tanstack: ["@tanstack/react-query"],
          radix: [
            "@radix-ui/react-tooltip",
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-toast",
            "@radix-ui/react-presence",
            "@radix-ui/react-portal",
            "@radix-ui/react-popper",
            "@radix-ui/react-label",
            "@radix-ui/react-switch",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-menu",
            "@radix-ui/react-collection",
            "@radix-ui/react-roving-focus",
            "@radix-ui/react-dismissable-layer",
            "@radix-ui/react-focus-guards",
            "@radix-ui/react-focus-scope",
          ],
          theming: ["next-themes", "sonner"],
        },
      },
    },
  },
});
