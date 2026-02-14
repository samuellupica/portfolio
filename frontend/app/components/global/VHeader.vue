<script setup lang="ts">
import type { PageReference, Settings } from '~/sanity/types';
import type { Slug } from 'sanity';

export type HeaderProps = Settings & {
    navigationItems: (PageReference & {
        name: string;
        slug: Slug;
    })[];
};

const isScrolled = ref(false);

const onScroll = () => (isScrolled.value = window.scrollY > 10);

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});
defineProps<HeaderProps>();
</script>

<template>
    <header
        class="section-container section-container--lg py-24 md:pb-32 animate animate-fade-in-blur fixed z-10 bg-surface-base/100 transition-all duration-500 left-0 right-0"
        :class="{
            'shadow-[0px_3px_35px_-15px_rgba(0,_0,_0,_0.1)] md:!py-20':
                isScrolled,
        }"
    >
        <nav class="flex justify-between items-center relative">
            <NuxtLink
                v-if="navigationItems?.length"
                :to="`/${navigationItems[0].slug.current}`"
                class="text-[28px] md:text-[36px] font-medium nav-link transition-all duration-500 origin-left"
                :class="{
                    'scale-[0.8]': isScrolled,
                }"
                >{{ navigationItems[0].name }}</NuxtLink
            >
            <div class="flex gap-x-44">
                <div
                    v-if="externalNavigationLinks?.length"
                    class="flex gap-x-16 origin-right transition-all duration-500"
                    :class="{
                        'scale-[0.8]': isScrolled,
                    }"
                >
                    <a
                        v-for="link in externalNavigationLinks"
                        :key="link._key"
                        class="transition-all duration-500 hover:scale-[105%]"
                        :href="link.url"
                        ><SanityImage
                            class="size-24 md:size-28"
                            v-if="link.logo?.asset"
                            :asset-id="link.logo.asset._ref"
                    /></a>
                </div>
                <div v-if="navigationItems?.length > 1">
                    <NuxtLink
                        v-for="link in navigationItems.slice(1)"
                        :to="`/${link?.slug.current}`"
                        >{{ link.name }}</NuxtLink
                    >
                </div>
            </div>
        </nav>
    </header>
</template>
<style>
@reference '~/assets/css/main.css';

.nav-link {
    @apply relative;
}

.nav-link::after {
    content: '';
    @apply absolute left-0 bottom-0 h-[3px] w-full bg-text-accent origin-left transition-transform duration-300 ease-in-out;
    transform: scaleX(0);
}

.nav-link:hover::after {
    @apply scale-100;
    transform: scaleX(1);
}
</style>
