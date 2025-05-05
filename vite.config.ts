import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: "./src/main.tsx",  // ou "./src/main.tsx" selon ton projet
      output: {
        entryFileNames: "assets/index.js",   // => pas de hash
        chunkFileNames: "assets/[name].js",   // => chunks propres
        assetFileNames: "assets/[name].[ext]", // => CSS/images propres
      }
    },
    emptyOutDir: true,
  }
}));
