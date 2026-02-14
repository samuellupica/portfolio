<script setup lang="ts">
import type { Settings } from '~/sanity/types';
import { settingsQuery } from '~/sanity/queries';
import VHeader, { type HeaderProps } from '~/components/global/VHeader.vue';

const { data: settings } = await useSanityQuery<HeaderProps>(settingsQuery);
</script>

<template>
    <div v-if="settings">
        <VHeader v-bind="settings" />
    </div>
    <main>
        <slot />
    </main>
</template>
