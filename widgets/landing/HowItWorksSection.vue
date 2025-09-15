<script setup lang="ts">
const steps = [
    {
        title: 'Выберите шаблон',
        description: 'Подберите подходящий дизайн из нашей коллекции',
        number: 1
    },
    {
        title: 'Настройте под себя',
        description: 'Измените контент, цвета и расположение элементов',
        number: 2
    },
    {
        title: 'Опубликуйте сайт',
        description: 'Разместите сайт в интернете одним кликом',
        number: 3
    }
];
</script>

<template>
    <section class="py-16 md:py-24">
        <UContainer>
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Как работает WebBuilder
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Всего три простых шага отделяют вас от готового сайта
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(step, index) in steps" :key="index" class="text-center">
                    <div class="relative mb-6">
                        <div
                            v-if="index < steps.length - 1"
                            class="hidden md:block absolute top-1/2 left-1/2 w-full h-0.5 bg-primary/20 z-0"
                        ></div>
                        <div class="relative z-10 w-16 h-16 mx-auto rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                            <div class="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                                <span class="text-2xl font-bold text-primary">{{ step.number }}</span>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {{ step.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        {{ step.description }}
                    </p>
                </div>
            </div>
        </UContainer>
    </section>
</template>