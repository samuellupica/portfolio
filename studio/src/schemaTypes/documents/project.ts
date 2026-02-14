import { defineField, defineType } from 'sanity';

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    groups: [
        {
            name: 'teaser',
            title: 'Teaser',
        },
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'meta',
            title: 'Meta',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
            group: 'content',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            group: 'content',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                'A slug is required for the project to show up in the preview',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context) =>
                    context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
            group: 'content',
        }),
        defineField({
            name: 'cover',
            title: 'Cover Image',
            type: 'image',
            validation: (rule) => rule.required(),
            group: 'content',
        }),
        defineField({
            name: 'description',
            type: 'blockContent',
            group: 'content',
        }),
        defineField({
            name: 'teaserImage',
            title: 'Teaser Image',
            type: 'image',
            group: 'teaser',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'teaserText',
            title: 'Teaser Text',
            type: 'text',
            group: 'teaser',
        }),
        defineField({
            name: 'context',
            title: 'Context',
            type: 'string',
            options: {
                list: [
                    { title: 'Personal', value: 'Personal' },
                    { title: 'Work', value: 'Work' },
                    { title: 'University', value: 'University' },
                    { title: 'Hackathon', value: 'Hackathon' },
                ],
            },
            group: 'meta',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            group: 'meta',
            validation: (rule) => rule.required(),
            options: {
                list: [
                    { title: 'Solo', value: 'Solo' },
                    { title: 'Team', value: 'Team' },
                ],
            },
        }),
        defineField({
            name: 'focus',
            title: 'Focus',
            type: 'array',
            group: 'meta',
            of: [{ type: 'focusItem' }],
            validation: (rule) => rule.min(1),
        }),
        defineField({
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url',
            group: 'meta',
        }),
        defineField({
            name: 'liveUrl',
            title: 'Live URL',
            type: 'url',
            group: 'meta',
        }),
        defineField({
            name: 'figmaUrl',
            title: 'Figma URL',
            type: 'url',
            group: 'meta',
        }),
        defineField({
            name: 'otherUrls',
            title: 'Other URLs',
            type: 'array',
            of: [{ type: 'url' }],
            group: 'meta',
        }),
    ],
});

export const focusItem = defineType({
    name: 'focusItem',
    title: 'Focus Item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
            options: {
                list: [
                    { title: 'Tech', value: 'tech' },
                    { title: 'Design', value: 'design' },
                ],
            },
        }),
    ],
});
