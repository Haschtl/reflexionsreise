import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/reflexionsreise/",
  plugins: [react(), svgr({ svgrOptions: { ref: true } })],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      // "@crescience/cresnet": path.resolve(__dirname, "../cresnetjs"),
    },
  },
});
