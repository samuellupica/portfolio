<script lang="ts" setup>
import type { Page } from '~/sanity/types';
import { blockComponentMap } from '~/components/sections';

type PageBuilderBlock = NonNullable<NonNullable<Page>['pageBuilder']>[number];

defineProps({
    blocks: {
        type: Array as () => PageBuilderBlock[],
        required: false,
    },
});
</script>

<template>
    <div class="flex flex-col gap-80 md:gap-152">
        <component
            v-for="(block, index) in blocks"
            :key="block._key"
            :is="blockComponentMap[block._type] || 'div'"
            :block="block"
        >
            <div v-if="!blockComponentMap[block._type]">
                Component doesn't exist for {{ block._type }}
            </div>
        </component>
    </div>
</template>
