export default defineNuxtConfig({
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  pages: true, // Явно включаем файловую маршрутизацию
  routeRules: {
    '/personal': { ssr: false } 
  },
})