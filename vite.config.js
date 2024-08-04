import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// ESM 환경에서 __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
  return {
    base: mode === "production" ? "/moguri_fe/" : "/",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        assets: path.resolve(__dirname, "src/assets"),
      },
    },
    server: {
      historyApiFallback: true,
    },
  };
});
