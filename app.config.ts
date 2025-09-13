import {defineAppConfig} from "nuxt/app";

export default defineAppConfig({
    icon: {
        size: '1.5rem',

        class: 'app-icon',

        // Создаем удобные псевдонимы (алиасы) для иконок
        aliases: {
            'github': 'mdi:github',
            'arrow-left': 'heroicons:arrow-left-solid',
        }
    }
})