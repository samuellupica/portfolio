<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const target = ref<Element | null>(null);
const isVisible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
    if (!target.value) return;

    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry?.isIntersecting) {
                isVisible.value = true;
                observer?.disconnect();
            }
        },
        {
            root: null,
            rootMargin: '0px 0px -15% 0px',
            threshold: 0,
        }
    );

    observer.observe(target.value);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>
<template>
    <div ref="target">
        <slot :is-visible="isVisible" />
    </div>
</template>
