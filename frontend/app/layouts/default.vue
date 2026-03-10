<script setup lang="ts">
import type { Settings } from '~/sanity/types';
import { settingsQuery } from '~/sanity/queries';
import VHeader, { type HeaderProps } from '~/components/global/VHeader.vue';

const { data: settings } = await useSanityQuery<HeaderProps>(settingsQuery);
const { sentinel: darkSentinel } = useDarkMode();
</script>

<template>
    <div v-if="settings">
        <VHeader v-bind="settings" />
    </div>
    <main>
        <slot />
    </main>
    <div v-if="settings" ref="darkSentinel">
        <VFooter
            :footer-title="settings.footerTitle"
            :footer-link="settings.footerLink"
        />
    </div>
</template>
