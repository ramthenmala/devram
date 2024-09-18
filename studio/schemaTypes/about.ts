// schemas/about.ts
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'about',
    title: 'About Me',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Enables image cropping
            },
        }),
    ],
});
