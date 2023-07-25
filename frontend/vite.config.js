import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: "http://ec2-18-140-3-118.ap-southeast-1.compute.amazonaws.com:6000",
                changeOrigin: true,
            },
        },
    },
});
