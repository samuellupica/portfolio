<script setup lang="ts">
import type { ButtonLink } from '~/sanity/types';

const props = withDefaults(
    defineProps<{
        link?: ButtonLink;
        variant?: 'default' | 'inverted';
        size?: 'sm';
        standalone?: boolean;
        buttonText?: string;
    }>(),
    {
        variant: 'default',
        size: 'sm',
    }
);
const resolvedHref = computed(() => {
    if (props.link?.link.linkType === 'email')
        return `mailto:${props.link.link.email}`;
    if (props.link?.link.linkType === 'href') return props.link.link.href;
    return undefined;
});
</script>
<template>
    <component
        :is="link ? defineNuxtLink({}) : 'button'"
        :to="
            link?.link.linkType === 'page' || link?.link.linkType === 'post'
                ? link?.link.page
                : undefined
        "
        :href="resolvedHref"
        class="px-20 py-12 md:px-24"
        :class="`button button--${size} button--${variant}`"
    >
        <span>{{ link ? link.link.text : buttonText }}</span>
        <Icon name="lucide:arrow-right" class="w-5 md:w-6 icon" />
    </component>
</template>
<style>
@reference '~/assets/css/main.css';

.button {
    @apply transition-all duration-300 flex items-center justify-center rounded-sm py-12 border-2 border-text-body w-fit;
}

.icon {
    @apply max-w-0;
}

.button:hover {
    @apply border-text-accent bg-color-button-surface-primary-hover text-text-inverted-body;

    & .icon {
        @apply text-text-inverted-body max-w-5;
    }
}

/* Size modifiers */
.button--sm {
    @apply gap-x-2 text-[20px] font-medium md:text-[22px] px-20 md:px-24;
}

.button--sm:hover {
    @apply px-22 md:px-100;
}

/* Variant modifiers */
.button--inverted {
    @apply border-text-inverted-body text-text-inverted-body;
}
</style>
