// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@nuxt/ui'],
    app: {
        baseURL: '/mariem512.github.io/',  // Remplace NOM_DU_REPO par le nom exact de ton repo GitHub
    },
    nitro: {
        preset: 'github_pages',
    },
})