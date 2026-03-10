<script setup lang="ts">
import type { Link } from '~/sanity/types';

const props = withDefaults(
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
    if (!props.standalone) return 'div';
    switch (props.linkType) {
        case 'page':
        case 'post':
            return defineNuxtLink({});
        case 'href':
        case 'email':
            return 'a';
        default:
            return 'a';
    }
});

const resolvedHref = computed(() => {
    if (props.linkType === 'email') return `mailto:${props.email}`;
    if (props.linkType === 'href') return props.href;
    return undefined;
});
</script>
<template>
    <component
        :is="component"
        :to="
            props.linkType === 'page' || props.linkType === 'post'
                ? props.page
                : undefined
        "
        :href="resolvedHref"
        :class="`link link--${props.size} link--${props.variant} ${!props.standalone ? 'group-hover' : ''}`"
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
    @apply gap-x-2 text-[20px] md:text-[24px] font-medium;
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

.link--secondary {
    @apply text-onyx-300;
}

.group:hover .link--secondary.group-hover,
.link--secondary:hover {
    @apply text-floral-100;

    .icon {
        @apply ml-1;
    }
}
</style>
