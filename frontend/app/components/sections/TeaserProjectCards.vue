<script setup lang="ts">
import type { Project, TeaserProjectCards } from '~/sanity/types';
import SectionTitle from '~/components/partials/SectionTitle.vue';
import TeaserProjectCard from '~/components/partials/TeaserProjectCard.vue';

defineProps({
    block: {
        type: Object as PropType<TeaserProjectCards>,
        required: true,
    },
});
// TODO: fix block type to be able to remove the "as unknown as Project" cast
</script>

<template>
    <section class="section-container section-container--lg">
        <AnimationWrapper v-slot="{ isVisible }">
            <SectionTitle
                v-if="block.sectionTitle"
                v-bind="block.sectionTitle"
                class="animate mb-52 md:mb-100"
                :class="{ 'animate-fade-in-blur': isVisible }"
            />
        </AnimationWrapper>

        <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-40 lg:gap-44"
        >
            <AnimationWrapper
                v-slot="{ isVisible }"
                v-if="block.projects.length"
                v-for="project in block.projects"
                :key="project._key"
            >
                <TeaserProjectCard
                    :block="project as unknown as Project"
                    class="animate"
                    :class="{ 'animate-fade-in-blur': isVisible }"
                />
            </AnimationWrapper>
        </div>
    </section>
</template>
