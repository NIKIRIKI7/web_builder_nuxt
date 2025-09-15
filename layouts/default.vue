<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">
        <TheHeader />
        <main>
            <slot />
        </main>
        <TheFooter />
    </div>
</template>

<script setup lang="ts">
import TheHeader from "~/widgets/TheHeader.vue";
import TheFooter from "~/widgets/TheFooter.vue";
</script>