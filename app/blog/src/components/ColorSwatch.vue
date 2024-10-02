<script setup lang='ts'>
import { Tooltip } from "@ui/ui-lib";

const { color } = defineProps<{ color: string }>();
const colorValue = getComputedStyle(document.body).getPropertyValue(`--${color}`);

const copyToClipboard = () => navigator.clipboard.writeText(colorValue);
</script>

<template>
    <Tooltip>
        <template #trigger>
            <div class="h-12 w-12 active:scale-90 transition-transform" :style="{ 'background-color': `var(--${color})` }" @click="copyToClipboard"></div>
        </template>
        <template #content>
            <span><strong>{{color}}:</strong> {{colorValue}}</span>
        </template>
    </Tooltip>
</template>
