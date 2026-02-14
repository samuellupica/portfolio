import { person } from './documents/person';
import { page } from './documents/page';
import { post } from './documents/post';
import { link } from './objects/link';
import { blockContent } from './objects/blockContent';
import { hero, specialImageText } from './objects/hero';
import { textImage } from './objects/textImage';
import { project } from './documents/project';
import { teaserProjectCards } from './objects/teaserProjectCards';
import { buttonLink } from './objects/buttonLink';
import {
    highlightedText,
    normalText,
    sectionTitle,
} from './objects/sectionTitle';
import { callToAction } from './objects/callToAction';
import {
    externalNavigationLink,
    pageAnchorLink,
    settings,
} from './singletons/settings';

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
    // Singletons
    settings,
    // partial objects
    externalNavigationLink,
    pageAnchorLink,
    normalText,
    highlightedText,
    specialImageText,
    // Documents
    page,
    post,
    person,
    project,
    // Objects
    blockContent,
    hero,
    link,
    textImage,
    buttonLink,
    teaserProjectCards,
    sectionTitle,
    callToAction,
];
