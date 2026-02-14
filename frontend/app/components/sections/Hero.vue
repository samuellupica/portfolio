<script setup lang="ts">
import type { Hero } from '~/sanity/types';
import type { PropType } from 'vue';

defineProps({
    block: {
        type: Object as PropType<Hero>,
        required: true,
    },
});
</script>

<template>
    <AnimationWrapper v-slot="{ isVisible }">
        <section
            class="section-container section-container--lg mb-[72px] md:mb-12"
        >
            <h1
                class="text-[53px] md:text-[112px] font-medium md:leading-tight leading-[105%]"
            >
                <span
                    class="lines-wrapper animate"
                    :class="{ ' animate-fade-in-blur': isVisible }"
                    style="--blur-start: var(--animation-blur-lg)"
                >
                    <span
                        class="line line--1 animate"
                        :class="{ ' animate-slide-in-from-right': isVisible }"
                    >
                        {{ block.firstLine }}
                    </span>

                    <span
                        v-if="block.secondLine"
                        class="line line--2"
                        :class="{ ' animate-slide-in-from-right': isVisible }"
                    >
                        {{ block.secondLine }}
                    </span>

                    <span
                        v-if="block.thirdLine"
                        class="line line--3 inline"
                        :class="{ ' animate-slide-in-from-right': isVisible }"
                    >
                        {{ block.thirdLine }}

                        <span
                            v-if="block.specialImageText?.image"
                            class="sr-only"
                        >
                            {{ block.specialImageText.text }}
                        </span>

                        <SanityImage
                            v-if="block.specialImageText?.image.asset"
                            :asset-id="block.specialImageText.image.asset._ref"
                            class="hero-image"
                            :class="{ ' animate-fade-in-blur': isVisible }"
                        />
                    </span>
                </span>
            </h1>
        </section>
    </AnimationWrapper>
</template>

<style>
@reference 'tailwindcss';

.lines-wrapper {
    @apply flex flex-col will-change-[filter];
}

.line {
    @apply opacity-0 will-change-[transform_,opacity];
}

.line--1 {
    animation-delay: 0ms;
}
.line--2 {
    animation-delay: 250ms;
}
.line--3 {
    animation-delay: 500ms;
}

.hero-image {
    @apply opacity-0 will-change-[filter_,opacity] inline-block h-[55px] md:h-[108px] w-auto md:ml-3 align-middle md:mb-4;
    animation-delay: 700ms;
}

/* Aktiviere Animationen nur wenn animation-active Klasse gesetzt ist */
.animation-active .animate-fade-in-blur {
    animation: fadeInBlur 900ms ease forwards;
}

.animation-active .animate-slide-in-from-right {
    animation: slideInFromRight 1000ms ease forwards;
}
</style>
