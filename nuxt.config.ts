// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxt/devtools', '@nuxt/image', '@nuxt/icon'],

    eslint: {
        config: {
            typescript: {
                strict: true,
            },
        },
    },

    image: {
        inject: true,

        quality: 85,

        format: ['avif', 'webp', 'jpeg', 'png'],

        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1920,
            '3xl': 2560
        },

        densities: [1, 2, 3],
    },

    icon: {
        mode: 'css',
        componentName: 'Icon',

        customCollections: [
            {
                prefix: 'web-builder-icon',
                dir: './assets/icons',
            },
        ],

        // Добавляем часто используемые иконки прямо в бандл, чтобы не было лишних запросов
        clientBundle: {
            scan: true,
            // Добавляем иконки, которые сканер может не найти (если имя динамическое)
            icons: [
                '...'
            ],
            includeCustomCollections: true,
        },
    },
});