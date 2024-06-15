<script setup lang="ts">
const { link, target = "_self" } = defineProps<{
    link?: string,
    target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop"
}>();
</script>

<template>
    <a v-if="link" :href="link" :target="target"
        class="inline-flex flex-row gap-1 items-center text-gray-12 hover:text-accent-11 transition-color duration-150 ease-in">
        <slot name="leftContent"></slot>
        <slot></slot>
        <slot name="rightContent"></slot>
    </a>
    <div v-else
        class="inline-flex flex-row gap-1 items-center text-gray-12 hover:text-accent-11 transition-color duration-150 ease-in">
        <slot name="leftContent"></slot>
        <slot></slot>
        <slot name="rightContent"></slot>
    </div>
</template>
