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

// TODO: implement conditional link wrapper if needed

const component = computed(() => {
    if (liveUrl || githubUrl || figmaUrl) return 'a';
    else return 'div';
});

const link = computed(() => {
    if (component.value === 'a') return liveUrl || githubUrl || figmaUrl;
});
</script>
<template>
    <component
        :is="component"
        :href="link"
        class="px-24 py-24 border-2 border-border rounded-sm relative block transition-all duration-300 origin-center bg-surface-base"
        :class="{
            ' hover:scale-[101%]': component === 'a',
        }"
    >
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
        <div class="flex gap-12 justify-end">
            <div
                v-for="focusItem in focus"
                :key="focusItem._key"
                class="text-[18px] md:text-[20px] font-medium px-2.5 py-12 md:px-16 md:py-12"
                :class="{
                    'bg-tag-tech-primary': focusItem.color === 'tech',
                    'bg-tag-design-primary': focusItem.color === 'design',
                }"
            >
                {{ focusItem.title }}
            </div>
        </div>
    </component>
</template>
<style scoped>
@reference '~/assets/css/main.css';
</style>
