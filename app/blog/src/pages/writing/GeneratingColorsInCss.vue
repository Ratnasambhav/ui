<script setup lang="ts">
import { watch } from "vue";
import { CodeSnippet, Label, Slider } from '@ui/ui-lib';
import ColorSwatch from '../../components/ColorSwatch.vue';

const hue = defineModel<string>();
hue.value = '37.42';

watch(hue, (newHue, oldHue) =>
  document.documentElement.style.setProperty('--hue', `${newHue || oldHue}`)
);

const COLORS = [
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
] as const;

const COLOR_CODE = `
  :root {
    --hue: 37.42;
    --color-bg: #fff;

    --primary-1: oklch(99.2% 0.003 var(--hue));
    --primary-2: oklch(97.9% 0.016 var(--hue));
    --primary-3: oklch(95.7% 0.039 var(--hue));
    --primary-4: oklch(92.1% 0.087 var(--hue));
    --primary-5: oklch(89.1% 0.115 var(--hue));
    --primary-6: oklch(85.7% 0.121 var(--hue));
    --primary-7: oklch(80.5% 0.125 var(--hue));
    --primary-8: oklch(74.5% 0.149 var(--hue));
    --primary-9: oklch(67% 0.222 var(--hue));
    --primary-10: oklch(63.1% 0.222 var(--hue));
    --primary-11: oklch(58.9% 0.214 var(--hue));
    --primary-12: oklch(35% 0.08 var(--hue));

    --primary-contrast: #fff;
    --primary-surface: color(display-p3 1 0.953 0.933 / 0.8);
    --primary-indicator: oklch(67% 0.222 var(--hue));
    --primary-track: oklch(67% 0.222 var(--hue));

    @media (prefers-color-scheme: dark) {
        --color-bg: #111111;

        --primary-1: oklch(17.8% 0.013 var(--hue));
        --primary-2: oklch(20.7% 0.02 var(--hue));
        --primary-3: oklch(25.5% 0.056 var(--hue));
        --primary-4: oklch(29.2% 0.093 var(--hue));
        --primary-5: oklch(33.3% 0.103 var(--hue));
        --primary-6: oklch(38.3% 0.106 var(--hue));
        --primary-7: oklch(45% 0.115 var(--hue));
        --primary-8: oklch(53.9% 0.142 var(--hue));
        --primary-9: oklch(67% 0.222 var(--hue));
        --primary-10: oklch(63.1% 0.222 var(--hue));
        --primary-11: oklch(79.1% 0.188 var(--hue));
        --primary-12: oklch(91.1% 0.055 var(--hue));

        --primary-contrast: #fff;
        --primary-surface: color(display-p3 0.165 0.094 0.071 / 0.5);
        --primary-indicator: oklch(67% 0.222 var(--hue));
        --primary-track: oklch(67% 0.222 var(--hue));
    }
  }
`;
const COLOR_LINK = 'https://github.com/Ratnasambhav/ui/blob/master/packages/tailwind-config/colors.css';
const TW_CONFIG_CODE = `
  const defaultTheme = require('tailwindcss/defaultTheme')

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          'sans': ["Atkinson Hyperlegible", ...defaultTheme.fontFamily.sans],
          'serif': ['Editorial New', ...defaultTheme.fontFamily.serif],
        },
        colors: {
          "background": "var(--color-bg)",

          "primary-1": "var(--primary-1)",
          "primary-2": "var(--primary-2)",
          "primary-3": "var(--primary-3)",
          "primary-4": "var(--primary-4)",
          "primary-5": "var(--primary-5)",
          "primary-6": "var(--primary-6)",
          "primary-7": "var(--primary-7)",
          "primary-8": "var(--primary-8)",
          "primary-9": "var(--primary-9)",
          "primary-10": "var(--primary-10)",
          "primary-11": "var(--primary-11)",
          "primary-12": "var(--primary-12)",

          "primary-contrast": "var(--primary-contrast)",
          "primary-surface": "var(--primary-surface)",
          "primary-indicator": "var(--primary-indicator)",
          "primary-track": "var(--primary-track)",

          "text-main": "var(--primary-12)",
          "text-sub": "var(--primary-11)",

          "surface-1": "var(--primary-1)",
          "surface-2": "var(--primary-2)",
          "surface-3": "var(--primary-3)",
        }
      },
    },
    plugins: [],
  }
`
const TW_CONFIG_LINK = 'https://github.com/Ratnasambhav/ui/blob/master/packages/tailwind-config/tailwind.config.cjs';
</script>

<template>
    <article class="flex flex-col gap-10">
        <h1 class="mt-10">Generating colors in CSS</h1>
        <section class="flex flex-col gap-4">
            <div class="w-36">
                <Slider :min="0" :max="360" id="hue" :initialValue="37.42" v-model="hue">
                    <Label>
                        Hue
                        <template #help>
                            <strong>Current value</strong>: {{ hue?.valueOf() || 'Error :('}}
                            <br/>
                            Slide to adjust the hue value of the OKLCH color variables.
                        </template>
                    </Label>
                </Slider>
            </div>
            <div class="grid grid-cols-[repeat(12,_48px)]">
                <ColorSwatch v-for="color in COLORS" :color="color" />
            </div>
        </section>

        <section class="flex flex-col gap-4">
            <CodeSnippet :code="COLOR_CODE" :link="COLOR_LINK" lang="css" title="colors.css"></CodeSnippet>
            <CodeSnippet :code="TW_CONFIG_CODE" :link="TW_CONFIG_LINK" lang="js" title="tailwind.config.cjs"></CodeSnippet>
        </section>
    </article>
</template>
