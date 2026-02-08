import { defineField, defineType } from 'sanity';

export const buttonLink = defineType({
     name: 'buttonLink',
     title: 'Button Link',
     type: 'object',
     fields: [
          defineField({
               name: 'link',
               title: 'Link',
               type: 'link',
               validation: (rule) => rule.required(),
          }),
     ],
});
