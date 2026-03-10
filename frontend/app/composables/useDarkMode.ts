export function useDarkMode() {
    const sentinel = ref<HTMLElement | null>(null);
    let observer: IntersectionObserver | null = null;

    onMounted(() => {
        if (!sentinel.value) return;

        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    document.body.classList.add('dark');
                } else {
                    document.body.classList.remove('dark');
                }
            },
            {
                root: null,
                threshold: 0,
            }
        );

        observer.observe(sentinel.value);
    });

    onBeforeUnmount(() => {
        observer?.disconnect();
        document.body.classList.remove('dark');
    });

    return { sentinel };
}
