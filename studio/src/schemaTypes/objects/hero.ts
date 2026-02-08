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
               name: 'specialTextImage',
               title: 'Special Text Image',
               type: 'image',
          }),
     ],
     preview: {
          prepare: () => ({ title: 'Hero Section', icon: BlockElementIcon }),
     },
});
