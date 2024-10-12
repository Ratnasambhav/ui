<script setup lang="ts">

const { id, min, max } = defineProps<{
  id: string,
  min: number,
  max: number,
}>();

const model = defineModel<string>();
</script>

<template>
    <div class="flex flex-col">
        <slot></slot>
        <div class="w-full bg-transparent">
            <input
                :id="id"
                :min="min"
                :max="max"
                type="range"
                v-model="model"
            >
        </div>
    </div>
</template>

<style>
input {
    --thumb-width: 12px;
    --thumb-height: 24px;
    --thumb-margin: -8px 0 0 0;
    --track-height: 8px;
    --border-radius: 4px;
    --thumb-bg: var(--primary-11);
    --track-bg: var(--primary-2);

    width: 100%;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
}

input:active, input:hover {
    --track-bg: var(--primary-1);
    --thumb-bg: var(--primary-12);
}

input::-webkit-slider-runnable-track {
  height: var(--track-height);
  background: var(--track-bg);
  border-radius: var(--border-radius);
}

input::-moz-range-track {
  height: var(--track-height);
  background: var(--track-bg);
  border-radius: var(--border-radius);
}

input::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  width: var(--thumb-width);
  height: var(--thumb-height);
  margin: var(--thumb-margin);
  background: var(--thumb-bg);
  border-radius: var(--border-radius);
}

input::-moz-range-thumb {
  width: var(--thumb-width);
  height: var(--thumb-height);
  background: var(--thumb-bg);
  border-radius: var(--border-radius);
}
</style>
