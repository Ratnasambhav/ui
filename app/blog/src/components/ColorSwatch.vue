<script setup lang='ts'>
import { Tooltip } from "@ui/ui-lib";

const { color } = defineProps<{ color: string }>();
const colorValue = getComputedStyle(document.body).getPropertyValue(`--${color}`);
</script>

<template>
    <Tooltip>
        <template #trigger>
            <div class="h-12 w-12" :style="{ 'background-color': `var(--${color})` }"></div>
        </template>
        <template #content>
            <span><strong>{{color}}:</strong> {{colorValue}}</span>
        </template>
    </Tooltip>
</template>
