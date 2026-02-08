import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export const textImage = defineType({
     name: 'textImage',
     title: 'Text Image Block',
     type: 'object',
     icon: ImageIcon,
     fields: [
          defineField({
               name: 'text',
               title: 'Text',
               type: 'text',
               validation: (rule) => rule.required(),
          }),
          defineField({
               name: 'image',
               title: 'Image',
               type: 'image',
               validation: (rule) => rule.required(),
          }),
          defineField({
               name: 'link',
               title: 'Link',
               type: 'link',
          }),
     ],
     preview: {
          prepare: () => ({ title: 'Text Image Block', icon: ImageIcon }),
     },
});
