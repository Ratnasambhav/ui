<script setup lang="ts">
import { Link, RightArrowIcon } from "@ui/ui-lib";

import { postList } from '../data';

/**
* Calculate the number of blog posts for a given year.
* @param {number} year - Year of the post
*/
const numPostInYear = (year: number): number => postList.reduce((count, post) => post.year === year ? count + 1 : count, 0)

/**
* Returns true if the given index is the same as the first post in the give year
* @param year Year of the post
* @param index Index of the post
*/
const shouldRenderYear = (year: number, index: number): boolean => postList.findIndex(post => post.year === year) === index
</script>

<template>
    <table>
        <tbody>
            <tr v-for="(post, index) in postList" class="border-t border-primary-12" :key="`${post.date}/${post.year}`">
                <td v-if="shouldRenderYear(post.year, index)" :rowspan="numPostInYear(post.year)"
                    class="py-2 pr-10 text-gray-10 align-baseline">
                    {{ post.year }}
                </td>
                <td class="py-2">
                    <RouterLink :to="post.link">
                        <Link>
                            <template #leftContent>
                                <RightArrowIcon />
                            </template>
                            {{ post.title }}
                            <template #rightContent>
                                <div class="pl-2 flex gap-1">
                                    <span v-for="(tag) in post.tags" class="px-1 rounded bg-primary-3 text-gray-10">#{{tag}}</span>
                                </div>
                            </template>
                        </Link>
                    </RouterLink>
                </td>
                <td class="py-2 pl-10 text-gray-10">
                    {{ post.date }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
