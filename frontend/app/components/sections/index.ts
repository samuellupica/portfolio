import Hero from '~/components/sections/Hero.vue';
import TextImage from '~/components/sections/TextImage.vue';
import TeaserProjectCards from '~/components/sections/TeaserProjectCards.vue';

export const blockComponentMap: Record<string, Component> = {
    hero: Hero,
    textImage: TextImage,
    teaserProjectCards: TeaserProjectCards,
};
