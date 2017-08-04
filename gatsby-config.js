module.exports = {
  siteMetadata: {
    title: "Raphael's Blog – rphl.io",
    description: 'A blog about coding 3d printing and linux',
    domain: 'https://blog.rphl.io',
    author: {
      name: 'Raphael',
      email: 'aliasgram@gmail.com'
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-sharp`
  ]
}

// blogTitle = "Raphael's Blog – rphl.io"
// blogDescription = "A blog about coding 3d printing and linux"
// authorName = "Raphael"
// authorEmail = "aliasgram@gmail.com"
// linkPrefix = "/"
// domain = "https://blog.rphl.io"
