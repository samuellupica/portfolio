<script setup lang="ts">
import type { TextImage } from '~/sanity/types';
import BaseLink from '~/components/partials/BaseLink.vue';

const props = withDefaults(
    defineProps<{
        block: TextImage;
    }>(),
    {}
);
</script>

<template>
    <AnimationWrapper v-slot="{ isVisible }">
        <section
            class="section-container section-container--lg text-image-section animate"
            :class="{ 'animate-fade-in-blur': isVisible }"
        >
            <div
                class="max-w-section-md ml-auto flex items-start gap-24 md:gap-44 md:items-end flex-col lg:flex-row"
            >
                <div
                    class="w-full lg:w-4/7 lg:mb-52 flex flex-col gap-y-4 md:gap-y-6"
                >
                    <p class="lead-text-lg">
                        {{ props.block.text }}
                    </p>
                    <BaseLink
                        v-if="block.link?.[0]?.linkType"
                        v-bind="block.link?.[0]"
                        standalone
                    />
                </div>
                <SanityImage
                    class="rounded-sm h-auto w-full lg:w-3/7"
                    :asset-id="props.block.image.asset?._ref"
                />
            </div>
        </section>
    </AnimationWrapper>
</template>
