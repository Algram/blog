import React, { FC } from 'react'
import { parseISO, isBefore } from 'date-fns'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { HomeQuery } from 'src/graphqlTypes'
import { Header } from '../components/Header'
import '../scss/index.scss'
import { Default as DefaultLayout } from '../components/Layout'
import { PostsList } from '../components/PostsList'

interface HomeProps {
  data: HomeQuery
}

const Home: FC<HomeProps> = ({ data }) => {
  const siteMetadata = data.site!.siteMetadata!
  let posts = data.allMarkdownRemark.edges

  // Move pinned post to top, remove unwanted posts
  const filteredPosts = posts
    .sort((a, b) => {
      if (b.node.frontmatter!.pinned) {
        return 1
      }

      return 0
    })
    .filter(
      post =>
        post.node.frontmatter!.layout === 'post' &&
        isBefore(parseISO(post.node.frontmatter!.date), new Date())
    )

  return (
    <DefaultLayout>
      <Helmet
        title={siteMetadata.title}
        meta={[
          {
            name: 'keywords',
            content:
              'blog, articles, coding, design, 3d printing, raspberry pi, development, linux',
          },
          { name: 'robots', content: 'index, follow' },
        ]}
      />
      <Header title={siteMetadata.title} author={siteMetadata.author} />
      <PostsList posts={filteredPosts} />
    </DefaultLayout>
  )
}

export default Home

export const query = graphql`
  query Home {
    site {
      siteMetadata {
        title
        author {
          name
          email
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          frontmatter {
            layout
            path
            date
            category
            title
            pinned
            hero {
              childImageSharp {
                resize(width: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
