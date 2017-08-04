const Feed = require('feed')
const markdownIt = require('markdown-it')
const fs = require('fs')
const path = require('path')
const moment = require('moment')
const prune = require('underscore.string').prune
const frontmatter = require('front-matter')
const config = require('./configFeed')

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
})

function generateRSSFeed (allPages) {
  // Only generate feed for actual posts
  const pages = allPages.filter(page => page.data.layout === 'post')

  // Sort pages.
  pages.sort((a, b) => (new Date(a.data.date) - new Date(b.data.date)))

  pages.reverse()

  const author = {
    name: config.authorName,
    email: config.authorEmail,
    link: config.domain
  }

  const feed = new Feed({
    title: config.blogTitle,
    description: config.blogDescription,
    link: config.domain,
    copyright: `All rights reserved ${moment(new Date()).format('YYYY')}, Raphael`,
    author
  })

  for (const page of pages) {
    const content = md.render(
      frontmatter(
        fs.readFileSync(
          `${__dirname}/pages/${page.requirePath}`,
          'utf-8'
      )
    ).body)

    const description = prune(content.replace(/<[^>]*>/g, ''), 600)

    feed.addItem({
      title: page.data.title,
      link: config.domain + page.path,
      description,
      content,
      author: [author],
      date: page.date,
      image: `${config.domain}${page.path}${page.data.hero || 'hero.jpg'}`
    })
  }

  fs.writeFileSync(`${__dirname}/public/feed.xml`, feed.render('rss-2.0'))
}

exports.onPostBuild = (pages, callback) => {
  generateRSSFeed(pages)
  callback()
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('src/templates/blog-post.js')
    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug, // required
            component: blogPost,
            context: {
              slug: edge.node.fields.slug
            }
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  let slug
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === ``) {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    slug = node.frontmatter.path

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug })
  }
}
