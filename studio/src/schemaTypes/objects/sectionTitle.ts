import { defineField, defineType } from 'sanity';

export const sectionTitle = defineType({
     name: 'sectionTitle',
     title: 'Section Title',
     type: 'object',
     fields: [
          defineField({
               name: 'title',
               title: 'title',
               type: 'array',
               of: [{ type: 'highlightedText' }, { type: 'normalText' }],
               validation: (rule) => rule.required().min(1),
          }),
          defineField({
               name: 'leadText',
               title: 'Lead Text',
               type: 'text',
          }),
     ],
});

export const normalText = defineType({
     name: 'normalText',
     title: 'Normal Text',
     type: 'object',
     fields: [
          defineField({
               name: 'text',
               title: 'Text',
               type: 'string',
               validation: (rule) => rule.required(),
          }),
     ],
     preview: {
          select: {
               text: 'text',
          },
          prepare: ({ text }) => ({ title: text, subtitle: 'Normal' }),
     },
});

export const highlightedText = defineType({
     name: 'highlightedText',
     title: 'Highlighted Text',
     type: 'object',
     fields: [
          defineField({
               name: 'text',
               title: 'Text',
               type: 'string',
               validation: (rule) => rule.required(),
          }),
     ],
     preview: {
          select: {
               text: 'text',
          },
          prepare: ({ text }) => ({ title: text, subtitle: 'Highlighted' }),
     },
});
