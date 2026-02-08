import { defineField, defineType } from 'sanity';

export const projectLink = defineType({
     name: 'projectLink',
     title: 'Project Link',
     type: 'object',
     fields: [
          defineField({
               name: 'type',
               title: 'Type',
               type: 'string',
               options: {
                    list: [
                         { title: 'GitHub', value: 'github' },
                         { title: 'Figma', value: 'figma' },
                         { title: 'Live', value: 'live' },
                    ],
               },
          }),
     ],
});
