<script setup lang="ts">
import type { SectionTitle } from '~/sanity/types';

defineProps<SectionTitle & { variant?: 'default' | 'inverted' }>();
</script>

<template>
    <div :class="{ 'text-text-inverted-body': variant === 'inverted' }">
        <h2 class="section-title">
            <span
                v-for="(word, i) in title"
                :key="i"
                class="hyphens-auto"
                lang="de"
                :class="{
                    'text-text-accent': word._type === 'highlightedText',
                    'text-text-inverted-body': variant === 'inverted',
                }"
            >
                {{ word.text }}<span v-if="i < title.length - 1">&nbsp;</span>
            </span>
        </h2>
        <p v-if="leadText" class="lead-text-sm">{{ leadText }}</p>
    </div>
</template>
