import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";
import KumaUI from "@kuma-ui/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    KumaUI({
      wasm: true,
    }),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
