// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@nuxt/ui'],
    nitro: {
        preset: 'github_pages',
    },
    app: {
        head: {
            title: 'Marie Metay'
        }
    }
})