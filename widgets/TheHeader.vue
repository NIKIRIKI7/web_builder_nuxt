<template>
    <header class="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/75 dark:bg-gray-900/75 backdrop-blur z-50">
        <UContainer class="flex justify-between items-center py-4">
            <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-squares-plus-solid" class="w-8 h-8 text-primary" />
                <span class="font-bold text-xl">WebBuilder</span>
            </div>

            <nav class="hidden md:flex gap-6">
                <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-primary font-medium">Главная</NuxtLink>
                <NuxtLink to="/login" class="text-gray-700 dark:text-gray-300 hover:text-primary font-medium">Логин</NuxtLink>
                <NuxtLink to="/templates" class="text-gray-700 dark:text-gray-300 hover:text-primary font-medium">Шаблоны</NuxtLink>
                <NuxtLink to="/pricing" class="text-gray-700 dark:text-gray-300 hover:text-primary font-medium">Тарифы</NuxtLink>
                <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-primary font-medium">О нас</NuxtLink>
            </nav>

            <div class="flex items-center gap-2">
                <UButton to="/login" variant="ghost" color="neutral">Войти</UButton>
                <UButton to="/register" color="primary">Регистрация</UButton>
            </div>
        </UContainer>
    </header>
</template>