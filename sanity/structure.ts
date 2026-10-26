import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Management')
    .items([
      // 1. Singleton Document: Website Layout & Settings with fixed ID 'siteSettings'
      S.listItem()
        .title('Website Layout & Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Website Layout & Settings')
        ),

      S.divider(),

      // 2. Normal Document List: Blog Articles
      S.documentTypeListItem('post').title('Blog Articles'),
    ])
