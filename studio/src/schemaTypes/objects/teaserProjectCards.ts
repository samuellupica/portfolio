import { defineField, defineType } from 'sanity';

export const teaserProjectCards = defineType({
     name: 'teaserProjectCards',
     title: 'Teaser Project Cards',
     type: 'object',
     fields: [
          defineField({
               name: 'sectionTitle',
               title: 'Section Title',
               type: 'sectionTitle',
               options: {
                    collapsed: true,
               },
          }),
          defineField({
               name: 'projects',
               title: 'Projects',
               type: 'array',
               of: [{ type: 'reference', to: [{ type: 'project' }] }],
               validation: (rule) => rule.required().min(1).max(6),
          }),
          defineField({
               name: 'buttonLink',
               title: 'Button Link',
               type: 'buttonLink',
          }),
     ],
     preview: {
          prepare: () => ({ title: 'Teaser Project Cards' }),
     },
});
