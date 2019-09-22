import React, { FC } from 'react'
import { parseISO, format } from 'date-fns'
import { Link } from 'gatsby'

import { MarkdownRemarkEdge } from 'src/graphqlTypes'

interface PostsListProps {
  posts: MarkdownRemarkEdge[]
}

export const PostsList: FC<PostsListProps> = ({ posts }) => {
  return (
    <>
      {posts.map(post => {
        const pageMetadata = post.node.frontmatter
        const pageContent = post.node.html
        const pageDescription = pageContent
          .replace(/<[^>]*>/g, '')
          .split(' ')
          .slice(0, 45)
          .join(' ')
        const pageHero = pageMetadata.hero.childImageSharp.resize.src

        return (
          <div
            className="postpreview"
            id={pageMetadata.title}
            key={pageMetadata.path}
          >
            <div className="postpreview__hero">
              <Link to={pageMetadata.path}>
                <img
                  alt="post-hero"
                  src={`${__PATH_PREFIX__}${pageHero}` || 'Default Image'}
                />
              </Link>
            </div>
            <time
              dateTime={format(parseISO(pageMetadata.date), 'dd-MMMM-yyyy')}
            >
              {format(parseISO(pageMetadata.date), 'dd MMMM yyyy')}
            </time>
            <span className="postpreview__category">
              {pageMetadata.category}
            </span>
            {pageMetadata.pinned && (
              <i className="postpreview__pinned icon-thumb-tack" />
            )}
            <h2>
              <Link to={pageMetadata.path}> {pageMetadata.title} </Link>
            </h2>
            <p className="postpreview__content">
              <span dangerouslySetInnerHTML={{ __html: pageDescription }} />
              <Link to={pageMetadata.path}>more »</Link>
            </p>
          </div>
        )
      })}
    </>
  )
}
