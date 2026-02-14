<script setup lang="ts">
import { pageQuery, settingsQuery } from '~/sanity/queries';
import type { Page, Settings } from '~/sanity/types';

const { data: page } = await useSanityQuery<Page>(pageQuery, {
    slug: useRoute().params.slug?.[0] || '/',
});

// This is needed to correctly set the studioUrl
const runtimeConfig = useRuntimeConfig();
</script>
<template>
    <div v-if="page">
        <div v-if="page.pageBuilder">
            <PageBuilder :blocks="page.pageBuilder" />
        </div>
    </div>
</template>
