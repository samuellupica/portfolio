<script setup lang="ts">
import type { SectionTitle } from '~/sanity/types';

defineProps<SectionTitle>();
</script>

<template>
    <div class="lg:ml-100">
        <h2 class="section-title">
            <span
                v-for="(word, i) in title"
                :key="i"
                class="hyphens-auto"
                lang="de"
                :class="{
                    'text-text-accent': word._type === 'highlightedText',
                }"
            >
                {{ word.text }}<span v-if="i < title.length - 1">&nbsp;</span>
            </span>
        </h2>
        <p v-if="leadText" class="lead-text-sm">{{ leadText }}</p>
    </div>
</template>
