<script setup lang="ts">
import type { Link } from '~/sanity/types';

const { linkType, standalone } = withDefaults(
    defineProps<
        Link & {
            variant?: 'primary' | 'secondary';
            size?: 'sm';
            standalone?: boolean;
            isNavLink?: boolean;
        }
    >(),
    {
        variant: 'primary',
        size: 'sm',
        standalone: false,
        isNavLink: false,
    }
);

const component = computed(() => {
    if (!standalone) return 'div';
    switch (linkType) {
        case 'page':
        case 'post':
            return defineNuxtLink({});
        case 'href':
            return 'a';
        default:
            return 'a';
    }
});
</script>
<template>
    <component
        :is="component"
        :to="linkType !== 'href' ? page : undefined"
        :href="linkType === 'href' ? href : undefined"
        :class="`link link--${size} link--${variant} ${!standalone ? 'group-hover' : ''}`"
    >
        <span>{{ text }}</span>
        <Icon name="lucide:arrow-right" class="w-5 md:w-6 icon" />
    </component>
</template>
<style>
@reference '~/assets/css/main.css';

.icon {
    @apply text-text-accent;
}

.icon,
.link {
    @apply transition-all duration-300;
}

.link {
    @apply flex items-center;
}
/* Size modifiers */
.link--sm {
    @apply gap-x-2 md:gap-x-2 text-[20px] md:text-[24px] font-medium;
}

/* Variant modifiers */
.link--primary {
    @apply text-onyx-600;
}

.group:hover .link--primary.group-hover,
.link--primary:hover {
    @apply text-link-primary-hover;

    .icon {
        @apply ml-1;
    }
}
</style>
