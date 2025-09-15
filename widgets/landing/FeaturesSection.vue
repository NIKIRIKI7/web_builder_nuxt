<script setup lang="ts">
const features = [
    {
        title: 'Перетаскиваемый редактор',
        description: 'Создавайте сайты интуитивно, перетаскивая элементы мышью',
        icon: 'i-heroicons-cursor-arrow-rays'
    },
    {
        title: 'Готовые блоки и шаблоны',
        description: 'Выбирайте из сотен профессиональных шаблонов и блоков',
        icon: 'i-heroicons-document-duplicate'
    },
    {
        title: 'Адаптивный дизайн',
        description: 'Ваш сайт будет идеально выглядеть на всех устройствах',
        icon: 'i-heroicons-device-phone-mobile'
    },
    {
        title: 'SEO-оптимизация',
        description: 'Встроенные инструменты для продвижения в поисковых системах',
        icon: 'i-heroicons-magnifying-glass'
    }
];
</script>
<template>
    <section class="py-16 md:py-24">
        <UContainer>
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Мощные возможности для создания сайтов
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Все инструменты, которые вам нужны для создания профессионального сайта
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <UCard
                    v-for="(feature, index) in features"
                    :key="index"
                    class="text-center hover:shadow-lg transition-shadow duration-300 border-0"
                >
                    <div class="flex justify-center mb-4">
                        <UIcon :name="feature.icon" class="w-12 h-12 text-primary" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {{ feature.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        {{ feature.description }}
                    </p>
                </UCard>
            </div>
        </UContainer>
    </section>
</template>