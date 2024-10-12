<script setup lang="ts">
import Tooltip from './Tooltip.vue';
import HelpIcon from '../icons/HelpIcon.vue';

defineProps({
  help: {
    type: Boolean,
    default: true,
  }
});
</script>

<template>
    <span class="flex gap-2 items-center">
        <strong><slot></slot></strong>

        <Tooltip v-if="help">
            <template #trigger>
                <HelpIcon></HelpIcon>
            </template>
            <template #content>
                <slot name="help"></slot>
            </template>
        </Tooltip>
    </span>
</template>
