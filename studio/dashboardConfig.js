export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605d4cb8a08451178ce45984',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jg8vodcq',
                  apiId: '4e07d2d3-3203-4088-b6f1-ea2d1736121d'
                },
                {
                  buildHookId: '605d4cb9e328d517a05af4b1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-viugc539',
                  apiId: 'ae19a6ba-9a2a-436e-815a-adebbbc85acf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxMaksum/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-viugc539.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
