import { defineField, defineType } from 'sanity';

/**
 * Settings schema Singleton.  Singletons are single documents that are displayed not in a collection, handy for things like site settings and other global configurations.
 * Learn more: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
 */

export const settings = defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'navigationItems',
            title: 'Navigation Items',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'page',
                    },
                },
            ],
        }),
        defineField({
            name: 'externalNavigationLinks',
            title: 'External Navigation Links',
            type: 'array',
            of: [{ type: 'externalNavigationLink' }],
        }),
    ],
    preview: {
        prepare: () => ({ title: 'Global Settings' }),
    },
});

export const pageAnchorLink = defineType({
    name: 'pageAnchorLink',
    title: 'Page Anchor Link',
    type: 'object',
    fields: [
        defineField({
            name: 'sectionId',
            title: 'Section ID',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ],
});

export const externalNavigationLink = defineType({
    name: 'externalNavigationLink',
    title: 'External Navigation Link',
    type: 'object',
    fields: [
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
        }),
    ],
});
