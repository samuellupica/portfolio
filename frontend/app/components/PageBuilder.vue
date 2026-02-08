<script lang="ts" setup>
import type { Page } from "~/sanity/types";

type PageBuilderBlock = NonNullable<
  NonNullable<Page>["pageBuilder"]
>[number];

const props = defineProps({
  blocks: {
    type: Array as () => PageBuilderBlock[],
    required: false,
  },
});


</script>

<template>
  <component
    v-for="(block, index) in blocks"
    :key="block._key"
    :is="resolveComponent(block._type) || 'div'"
    :block="block"
  >
    <div v-if="!resolveComponent(block._type)">
      Component doesn't exist for this block type
    </div>
  </component>
</template>
