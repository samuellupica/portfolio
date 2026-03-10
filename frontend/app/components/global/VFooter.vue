<script setup lang="ts">
import type { Settings } from '~/sanity/types';
import SectionTitle from '~/components/partials/SectionTitle.vue';
import BaseButton from '~/components/partials/BaseButton.vue';

defineProps<{
    footerTitle: Settings['footerTitle'];
    footerLink?: Settings['footerLink'];
}>();
</script>

<template>
    <AnimationWrapper v-slot="{ isVisible }">
        <footer
            class="footer animate"
            :class="{ 'animate-fade-in-blur': isVisible }"
        >
            <div class="blob-container">
                <span class="blob-1"></span>
                <span class="blob-2"></span>
            </div>

            <div class="section-container section-container--lg relative z-10">
                <div class="flex flex-col gap-44 md:gap-64">
                    <div
                        class="flex flex-col gap-24 md:gap-32 max-w-section-md base-button"
                    >
                        <SectionTitle variant="inverted" v-bind="footerTitle" />
                        <BaseButton
                            variant="inverted"
                            v-if="footerLink"
                            :link="{ link: footerLink, _type: 'buttonLink' }"
                        />
                    </div>
                </div>
            </div>
        </footer>
    </AnimationWrapper>
</template>

<style>
@reference '~/assets/css/main.css';

.footer {
    @apply relative  py-80 md:pt-100 md:pb-152;
}

.blob-1 {
    @apply blur-[100px] size-[100%] md:size-[80%] rounded-full bg-linear-to-tr from-lavender-500/80 to-pink-300/80 absolute bottom-0 left-[1%];
    animation: moveBlob1 8s ease-in-out infinite;
}

.blob-2 {
    @apply blur-[100px] w-[100%] h-[90%] md:w-[90%] md:h-[70%] rounded-full bg-linear-to-br  from-indigo-500/400 to-indigo-200  absolute bottom-[10%] right-[1%];
    animation: moveBlob2 7s ease-in-out infinite;
}

@keyframes moveBlob1 {
    0%,
    100% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(30%, -10%);
        opacity: 0.7;
    }
    78% {
        transform: translate(10%, -20%);
        opacity: 0.8;
    }
}

@keyframes moveBlob2 {
    0%,
    100% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(-90%, -30%);
        opacity: 0.9;
    }
    78% {
        transform: translate(-10%, -10%);
        opacity: 0.8;
    }
}
</style>
