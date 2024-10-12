<script setup lang="ts">
import { ref } from 'vue';
import { highlighter } from '../utils/shiki';

import Link from './Link.vue';
import Button from './Button.vue';
import Tooltip from './Tooltip.vue';

import CopyIcon from '../icons/CopyIcon.vue';
import CodeFileIcon from '../icons/CodeFileIcon.vue';
import ExternalLinkIcon from '../icons/ExternalLinkIcon.vue';

const {
  code,
  link,
  title,
  lang = 'javascript',
} = defineProps<{
  code: string,
  link?: string,
  title: string,
  lang?: string,
}>();
const html = highlighter.codeToHtml(code, {
  lang,
  themes: { light: 'vitesse-light', dark: 'vitesse-dark' }
});

const tooltipText = ref("Copy code to clipboard");

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(code);
    tooltipText.value = "Copied!"
  } catch {
    tooltipText.value = "Failed to copy code :("
  } finally {
    setTimeout(() => tooltipText.value = "Copy code to clipboard", 2000);
  }
}
</script>

<template>
    <div class="flex flex-col">
        <div class="header">
            <div class="flex gap-2 items-center">
                <CodeFileIcon></CodeFileIcon>
                <Link v-if="link" :link="link" target="_blank">
                    {{ title }}
                    <template #rightContent>
                        <ExternalLinkIcon></ExternalLinkIcon>
                    </template>
                </Link>
                <span v-else>{{ title }}</span>
            </div>
            <Tooltip>
                <template #trigger>
                    <Button @click="handleCopy">
                        <CopyIcon></CopyIcon>
                    </Button>
                </template>
                <template #content>
                    <span>{{ tooltipText }}</span>
                </template>
            </Tooltip>
        </div>
        <div v-html="html"></div>
    </div>
</template>

<style>
    .header {
        @apply p-2 flex items-center justify-between gap-2 rounded-t-md;
        background-color: #ffffff;
        border-bottom: 2px dashed var(--primary-2);
    }

    pre {
        @apply overflow-scroll rounded-b-md pb-4;
    }

    code {
        font-size: 1rem !important;
    }

    @media (prefers-color-scheme: dark) {
        .header {
            background-color: #121212;
        }

        .shiki,
        .shiki span {
            color: var(--shiki-dark) !important;
            background-color: var(--shiki-dark-bg) !important;
            font-style: var(--shiki-dark-font-style) !important;
            font-weight: var(--shiki-dark-font-weight) !important;
            text-decoration: var(--shiki-dark-text-decoration) !important;
        }
    }
</style>
