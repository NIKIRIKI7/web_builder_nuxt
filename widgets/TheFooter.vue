<template>
    <footer class="bg-gray-900 text-white py-12">
        <UContainer class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <div class="flex items-center gap-2 mb-4">
                    <UIcon name="i-heroicons-squares-plus-solid" class="w-8 h-8 text-primary" />
                    <span class="font-bold text-xl">WebBuilder</span>
                </div>
                <p class="text-gray-400">
                    Современный конструктор сайтов для профессионалов и начинающих
                </p>
            </div>

            <div>
                <h3 class="font-semibold mb-4">Продукт</h3>
                <ul class="space-y-2 text-gray-400">
                    <li><NuxtLink to="/templates" class="hover:text-white">Шаблоны</NuxtLink></li>
                    <li><NuxtLink to="/features" class="hover:text-white">Возможности</NuxtLink></li>
                    <li><NuxtLink to="/pricing" class="hover:text-white">Тарифы</NuxtLink></li>
                </ul>
            </div>

            <div>
                <h3 class="font-semibold mb-4">Поддержка</h3>
                <ul class="space-y-2 text-gray-400">
                    <li><NuxtLink to="/help" class="hover:text-white">Помощь</NuxtLink></li>
                    <li><NuxtLink to="/contact" class="hover:text-white">Контакты</NuxtLink></li>
                    <li><NuxtLink to="/faq" class="hover:text-white">FAQ</NuxtLink></li>
                </ul>
            </div>

            <div>
                <h3 class="font-semibold mb-4">Компания</h3>
                <ul class="space-y-2 text-gray-400">
                    <li><NuxtLink to="/about" class="hover:text-white">О нас</NuxtLink></li>
                    <li><NuxtLink to="/blog" class="hover:text-white">Блог</NuxtLink></li>
                    <li><NuxtLink to="/careers" class="hover:text-white">Вакансии</NuxtLink></li>
                </ul>
            </div>
        </UContainer>

        <div class="border-t border-gray-800 mt-8 pt-8">
            <UContainer class="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                <p>© 2023 WebBuilder. Все права защищены.</p>
                <div class="flex gap-6 mt-4 md:mt-0">
                    <NuxtLink to="/privacy" class="hover:text-white">Политика конфиденциальности</NuxtLink>
                    <NuxtLink to="/terms" class="hover:text-white">Условия использования</NuxtLink>
                </div>
            </UContainer>
        </div>
    </footer>
</template>