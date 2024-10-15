import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),
    defineArrayMember({
      type: 'code',
      name: 'myCodeField',
      title: 'Code with all options',
      options: {
        language: 'javascript',
        languageAlternatives: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'JSX', value: 'jsx' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'TSX', value: 'tsx' },
          { title: 'PHP', value: 'php' },
          { title: 'SQL', value: 'sql' },
          { title: 'MySQL', value: 'mysql' },
          { title: 'JSON', value: 'json' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'Java', value: 'java' },
          { title: 'HTML', value: 'html' },
          { title: 'C#', value: 'csharp' },
          { title: 'Shell', value: 'sh' },
          { title: 'CSS', value: 'css' },
          { title: 'SCSS', value: 'scss' },
          { title: 'Sass', value: 'sass' },
          { title: 'Ruby', value: 'ruby' },
          { title: 'Python', value: 'python' },
          { title: 'XML', value: 'xml' },
          { title: 'YAML', value: 'yaml' },
          { title: 'Go', value: 'golang' },
          { title: 'Text', value: 'text' },
          { title: 'Batch', value: 'batch' }
        ],
        withFilename: true,
      },
    }),
    defineArrayMember({
      type: 'object',
      name: 'table',
      title: 'Table',
      fields: [
        {
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  title: 'Cells',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
