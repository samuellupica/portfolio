<script setup lang="ts">
import type { Project } from '~/sanity/types';

const props = defineProps({
    block: {
        type: Object as PropType<Project>,
        required: true,
    },
});

const {
    title,
    teaserText,
    teaserImage,
    role,
    context,
    focus,
    githubUrl,
    figmaUrl,
    otherUrls,
    liveUrl,
} = props.block;
</script>
<template>
    <div class="px-24 py-24 border-2 border-border rounded-sm relative">
        <span
            class="absolute bg-surface-base top-0 -translate-y-1/2 left-12 px-16 text-[24px]"
        >
            {{ context }}
        </span>
        <div class="mb-32 md:mb-44">
            <!--          TODO: check styling for tablet-->
            <h3 class="text-[36px] font-semibold md:text-[48px] md:mb-2">
                {{ title }}
            </h3>
            <p
                class="text-[18px] leading-[125%] md:text-[20px] md:leading-[125%]"
            >
                {{ teaserText }}
            </p>
        </div>
        <SanityImage
            :asset-id="teaserImage.asset?._ref"
            class="aspect-[4/3] px-20 object-contain mb-40 lg:mb-64"
        />
        <div class="flex gap-12 bg-tag-t"></div>
    </div>
</template>
