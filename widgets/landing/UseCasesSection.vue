<script setup lang="ts">
const useCases = [
    {
        title: 'Малый бизнес',
        description: 'Создайте сайт для вашей компании, привлекайте клиентов и развивайте свой бренд онлайн.',
        icon: 'i-heroicons-building-storefront'
    },
    {
        title: 'Фрилансеры и креаторы',
        description: 'Продемонстрируйте свои работы в стильном портфолио, которое легко обновлять и управлять.',
        icon: 'i-heroicons-paint-brush'
    },
    {
        title: 'Интернет-магазины',
        description: 'Запустите продажи онлайн с помощью наших готовых решений для e-commerce и приема платежей.',
        icon: 'i-heroicons-shopping-cart'
    },
    {
        title: 'Личные блоги',
        description: 'Делитесь своими идеями с миром на красивом и быстром блоге с удобным редактором.',
        icon: 'i-heroicons-pencil-square'
    }
];
</script>

<template>
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <UContainer>
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Идеальное решение для каждого
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    WebBuilder помогает тысячам людей достигать своих целей в интернете, будь то бизнес, творчество или личный проект.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(useCase, index) in useCases" :key="index" class="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <UIcon :name="useCase.icon" class="w-10 h-10 text-primary mb-4" />
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {{ useCase.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        {{ useCase.description }}
                    </p>
                </div>
            </div>
        </UContainer>
    </section>
</template>