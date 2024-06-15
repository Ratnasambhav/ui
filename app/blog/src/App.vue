<script setup lang="ts">
import { Blur } from "@ui/ui-lib";
import Nav from './components/Nav.vue';
</script>

<template>
    <Blur></Blur>
    <div class="min-h-dvh max-w-5xl pt-32 m-auto flex flex-col gap-8 relative">
        <header>
            <Nav></Nav>
        </header>
        <main>
            <RouterView/>
        </main>
        <footer></footer>
    </div>
</template>
