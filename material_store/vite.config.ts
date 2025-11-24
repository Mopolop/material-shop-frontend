import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';
import { api_proxy_addr, img_proxy_addr, dest_root } from "./src/target_config";


export default defineConfig({
  base: dest_root,
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    },
    port: 3000,
      proxy: {
      "/api": {
        target: api_proxy_addr,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,""),
      },
      "/img-proxy": {
             target: img_proxy_addr,
           changeOrigin: true,
          rewrite: (path) => path.replace(/^\/img-proxy/, ""),
      },
    },
  },
  plugins: [
    react(),
    mkcert(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      workbox: {globPatterns: [],},
      manifest: {
        name: "ЛЕМАНА ПРО",
        short_name: "ЛП",
        start_url: "/material-shop-frontend/",
        display: "standalone",
        background_color: "#faf9f7",
        theme_color: "#fcc11c",
        orientation: "portrait-primary",
        icons: [
          { src: "logo192.png", type: "image/png", sizes: "192x192" },
          { src: "logo512.png", type: "image/png", sizes: "512x512" }
        ],
        screenshots: [
          { src: "screenshot-wide.png", sizes: "1280x720", type: "image/png", form_factor: "wide" },
          { src: "screenshot-mobile.png", sizes: "640x1136", type: "image/png" }
        ]
      }
    })
  ]
})

