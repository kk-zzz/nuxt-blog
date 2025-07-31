// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  unocss: {
    uno: true, // 启用 UnoCSS 的默认配置
    attributify: true, // 启用属性化模式
    icons: true, // 启用图标支持
  }
})
