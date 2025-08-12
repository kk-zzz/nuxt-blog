// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@unocss/nuxt',],
  components: [
    // default: true, BaseFooButton, 若是 false，则要使用 Button
    { path: '~/components/', pathPrefix: true, ignore: ['content'] },
    { path: '~/components/content/', pathPrefix: false }
  ],

  // SSG 配置 - 预渲染路由
  nitro: {
    prerender: {
      routes: ['/blog']
    }
  },

  unocss: {
    uno: true, // 启用 UnoCSS 的默认配置
    attributify: true, // 启用属性化模式
    icons: true, // 启用图标支持
  },
})
