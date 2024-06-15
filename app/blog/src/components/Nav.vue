<script setup lang="ts">
import { Link, HeadphoneIcon, HomeIcon } from "@ui/ui-lib"
</script>

<style scoped>
.active {
    @apply [&_div]:relative [&_a]:relative;
    @apply [&_div]:before:box-border [&_div]:before:h-[2px] [&_a]:before:box-border [&_a]:before:h-[2px];
    @apply [&_div]:before:absolute [&_div]:before:bottom-0 [&_div]:before:left-0 [&_div]:before:right-0 [&_a]:before:absolute [&_a]:before:bottom-0 [&_a]:before:left-0 [&_a]:before:right-0;
    @apply [&_div]:before:bg-accent-indicator [&_a]:before:bg-accent-indicator;
}
</style>

<template>
    <nav class="flex flex-row gap-6 items-center">
        <!-- <img src="/profile.JPG?url" class="w-10 h-10 rounded-full" alt="Ratnasambhav Priyadarshi" /> -->
        <RouterLink to="/" activeClass="active">
            <Link>
                <template #leftContent>
                    <HomeIcon />
                </template>
                Home
            </Link>
        </RouterLink>
        <RouterLink to="/now" activeClass="active">
            <Link>
                <template #leftContent>
                    <HeadphoneIcon />
                </template>
                Now Playing
            </Link>
        </RouterLink>
    </nav>
</template>
