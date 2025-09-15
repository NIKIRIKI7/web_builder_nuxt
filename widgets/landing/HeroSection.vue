<template>
    <section class="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <UContainer class="flex flex-col md:flex-row items-center gap-10">
            <div class="flex-1 space-y-6">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                    Создавайте сайты <span class="text-primary">без усилий</span>
                </h1>
                <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                    Мощный конструктор сайтов с интуитивным интерфейсом. Не требуется знаний программирования.
                    Профессиональный результат за минуты.
                </p>
                <div class="flex flex-wrap gap-4 pt-4">
                    <UButton size="xl" to="/register" color="primary" class="px-8">
                        Начать бесплатно
                    </UButton>
                    <UButton size="xl" variant="outline" class="px-8">
                        Смотреть демо
                    </UButton>
                </div>
            </div>
            <div class="flex-1 flex justify-center">
                <img
                    src="https://placehold.co/600x400/e0e7ff/3730a3?text=WebBuilder+UI"
                    alt="Интерфейс WebBuilder"
                    class="rounded-lg shadow-2xl max-w-full h-auto"
                />
            </div>
        </UContainer>
    </section>
</template>