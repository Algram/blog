const moment = require('moment')
const path = require('path')

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
                excerpt(pruneLength: 200)
                timeToRead
                frontmatter {
                  date
                  path
                  category
                  keywords
                  title
                  githubIssue
                }
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
        let posts = result.data.allMarkdownRemark.edges
        posts = posts.filter((post) => {
          return moment(post.node.frontmatter.date).isBefore(new Date())
        })

        posts.forEach((edge, index) => {
          const prev = index === 0 ? false : posts[index - 1].node
          let next = index === posts.length - 1 ? false : posts[index + 1].node

          if (!next) {
            next = posts[0].node
          }

          createPage({
            path: edge.node.fields.slug, // required
            component: blogPost,
            context: {
              slug: edge.node.fields.slug,
              prev,
              next
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
