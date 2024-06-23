<script setup lang="ts">
import ColorSwatch from '../../components/ColorSwatch.vue';

const handelHueChange = (event: Event) => {
    document.documentElement.style.setProperty('--hue', event.target?.value || 37.42)
}

const colors = [
    'primary-1',
    'primary-2',
    'primary-3',
    'primary-4',
    'primary-5',
    'primary-6',
    'primary-7',
    'primary-8',
    'primary-9',
    'primary-10',
    'primary-11',
    'primary-12',
]
</script>

<template>
    <article class="flex flex-col gap-10">
        <h1 class="mt-10">Generating colors in CSS</h1>
        <section>
            <div class="grid grid-cols-[repeat(12,_48px)]">
                <ColorSwatch v-for="color in colors" :color="color" />
            </div>

            <input type="range" min="0" max="360" v-on:change="handelHueChange" />
        </section>
    </article>
</template>
