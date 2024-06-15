<script setup lang="ts">
import { Link, ExternalLinkIcon } from '@ui/ui-lib';
import PostList from '../components/PostList.vue';
</script>

<template>
    <div class="flex flex-col gap-20">
        <section class="flex flex-col">
            <h1 class="font-serif text-3xl">Ratnasambhav Priyadarshi</h1>
            <p class="text-sm mac-w-prose mb-4 text-gray-11">Member of Techinal Staff at
                <Link link="https://www.purestorage.com/" target="_blank">
                Pure Storage
                <template #rightContent>
                    <ExternalLinkIcon />
                </template>
                </Link>
                .
            </p>
            <p class="text-base max-w-prose">
                Welcome to my digital space.
                I'm a software developer, passionate about crafting web experiences and building polished applications.
            </p>
        </section>

        <section>
            <h2 class="font-serif text-xl text-gray-12 mb-4">Writing</h2>
            <PostList />
        </section>
    </div>
</template>
