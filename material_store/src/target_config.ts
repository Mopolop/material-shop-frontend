
const target_tauri = true

export const api_proxy_addr = "http://192.168.1.192:8080/api"
export const img_proxy_addr = "http://192.168.1.192:9000"

// Проверяем, запущен ли проект в режиме разработки (через Vite).
// Vite автоматически добавляет переменную import.meta.env.DEV === true, если это dev-сборка.
// Если MODE не равен "production" — значит это тоже dev-режим.
const isDev = (
  typeof import.meta !== 'undefined' &&          // Проверяем, доступен ли import.meta
  (import.meta as any).env &&                    // Проверяем, что есть переменная окружения Vite
  (
    (import.meta as any).env.DEV === true ||     // Явно dev-режим
    (import.meta as any).env.MODE !== 'production' // Или не продакшн
  )
) ?? false

export const dest_api = isDev ? "/api" : (target_tauri ? api_proxy_addr : "/api")
export const dest_img = isDev? "/img-proxy/materials/": img_proxy_addr + "/materials/"
export const dest_root = target_tauri ? "": "/material-shop-frontend"
