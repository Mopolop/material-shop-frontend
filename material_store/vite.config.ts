import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';


export default defineConfig({
  base: "/material-shop-frontend",
  server: {
     https:{
    key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
  },
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(), mkcert(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
     manifest: {
  name: "ЛЕМАНА ПРО",
  short_name: "ЛП",
  start_url: "/material-shop-frontend/",
  display: "standalone",
  background_color: "#faf9f7",
  theme_color: "#fcc11c",
  orientation: "portrait-primary",
  icons: [
    { src: "/material-shop-frontend/logo192.png", type: "image/png", sizes: "192x192" },
    { src: "/material-shop-frontend/logo512.png", type: "image/png", sizes: "512x512" }
  ],
  screenshots: [
    { src: "/material-shop-frontend/screenshot-wide.png", sizes: "1280x720", type: "image/png", form_factor: "wide" },
    { src: "/material-shop-frontend/screenshot-mobile.png", sizes: "640x1136", type: "image/png" }
  ]
}

    })
  ]
})
