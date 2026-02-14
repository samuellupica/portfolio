import { defineField, defineType } from 'sanity';
import { BlockElementIcon } from '@sanity/icons';

export const hero = defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    icon: BlockElementIcon,
    fields: [
        defineField({
            name: 'firstLine',
            title: 'First Line',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'secondLine',
            title: 'Second Line',
            type: 'string',
        }),
        defineField({
            name: 'thirdLine',
            title: 'Third Line',
            type: 'string',
        }),
        defineField({
            name: 'specialImageText',
            title: 'Special Image Text',
            type: 'specialImageText',
        }),
    ],
    preview: {
        prepare: () => ({ title: 'Hero Section', icon: BlockElementIcon }),
    },
});

export const specialImageText = defineType({
    name: 'specialImageText',
    title: 'Special Image Text',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ],
});
