<script setup lang='ts'>
const { color } = defineProps<{ color: string }>();
const colorValue = getComputedStyle(document.body).getPropertyValue(`--${color}`);
</script>

<template>
    <div v-tooltip="`${colorValue}, ${color}`" :style="{ 'background-color': `var(--${color})` }"
        :title="`${colorValue}, ${color}`" class="h-12 w-12">
    </div>
</template>
