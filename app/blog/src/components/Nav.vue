<script setup lang="ts">
import { Link } from "@ui/ui-lib"
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
    <nav class="flex flex-row gap-6">
        <RouterLink to="/" activeClass="active">
            <Link>
            <template #leftContent>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.5 11.5H9.5M8.0547 1.8698L13.0547 5.20313C13.3329 5.3886 13.5 5.70083 13.5 6.03518V11.5C13.5 12.6046 12.6046 13.5 11.5 13.5H3.5C2.39543 13.5 1.5 12.6046 1.5 11.5V6.03518C1.5 5.70083 1.6671 5.3886 1.9453 5.20313L6.9453 1.8698C7.2812 1.64587 7.7188 1.64587 8.0547 1.8698Z"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </template>
            Home
            </Link>
        </RouterLink>
        <RouterLink to="/now" activeClass="active">
            <Link>
            <template #leftContent>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_595_829)">
                        <path
                            d="M1.48197 9.94949L1.99961 11.8813C2.28549 12.9483 3.38217 13.5814 4.4491 13.2956C5.51603 13.0097 6.1492 11.913 5.86331 10.8461L5.34568 8.91421C5.05979 7.84728 3.96312 7.21411 2.89619 7.5C1.82925 7.78588 1.19609 8.88255 1.48197 9.94949ZM1.48197 9.94949C0.821185 7.43773 1.99954 1.5 7.49988 1.5C13.0002 1.49999 14.2127 7.43773 13.5693 9.94949M13.5693 9.94949L13.0517 11.8813C12.7658 12.9483 11.6691 13.5814 10.6022 13.2956C9.53526 13.0097 8.9021 11.913 9.18798 10.8461L9.70562 8.91421C9.9915 7.84728 11.0882 7.21411 12.1551 7.5C13.222 7.78588 13.8552 8.88255 13.5693 9.94949Z"
                            stroke="currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_595_829">
                            <rect width="15" height="15" fill="currentColor" />
                        </clipPath>
                    </defs>
                </svg>
            </template>
            Now Playing
            </Link>
        </RouterLink>
    </nav>
</template>
