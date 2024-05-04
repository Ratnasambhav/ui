<script setup lang="ts">
withDefaults(
    defineProps<{
        loading: boolean;
        disabled: boolean;
        role: "button" | "link";
        variant: "primary" | "secondary" | "ghost";
        rounded: "none" | "sm" | "md" | "lg" | "full";
    }>(),
    {
        loading: false,
        disabled: false,
        rounded: "md",
        variant: "primary",
        role: "button",
    },
);
</script>

<template>
    <button
        :role="role"
        :disabled="disabled"
        :class="{
            '--loading': loading,
            '--disabled': disabled,
            [`--${variant}`]: true,
            '--rounded': !Boolean(rounded),
            [`--rounded-${rounded}`]: Boolean(rounded),
        }"
    >
        <slot name="start-item"></slot>
        <slot></slot>
        <slot name="end-item"></slot>
    </button>
</template>

<style scoped>
button {
    all: unset;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding-inline-end: 0.75rem;
    padding-inline-start: 0.75rem;
    font-weight: 500;
    text-transform: none;
    font-size: var(--text-sm-fs);
    line-height: var(--text-sm-lh);
    outline-color: var(--focus-color);
    cursor: pointer;
    transition:
        transform 100ms ease-in-out,
        color 200ms ease-in-out,
        background-color 200ms ease-in-out;
}

button:active {
    transform: scale(0.95);
}

button.--primary {
    color: var(--gray-100);
    background-color: var(--gray-1200);
    box-shadow: var(--shadow-sm);
}

button.--primary:hover {
    background-color: #37362f;
}

button.--secondary {
    color: var(--gray-1200);
    background-color: var(--white);
    box-shadow: var(--shadow-sm);
}

button.--secondary:hover,
button.--ghost:hover {
    color: var(--gray-1200);
    background-color: var(--gray-200);
}

button.--rounded-sm {
    border-radius: 0.125rem;
}

button.--rounded {
    border-radius: 0.25rem;
}

button.--rounded-md {
    border-radius: 0.375rem;
}

button.--rounded-lg {
    border-radius: 0.5rem;
}

button.--rounded-full {
    border-radius: 9999px;
}

button.--loading {
    cursor: progress;
}
</style>
