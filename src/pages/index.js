import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../layouts/DefaultLayout'

export default function IndexPage(
  { data: { allMarkdownRemark: { nodes } } }
) {
  return (
    <DefaultLayout>
      {
        nodes.map(node => {
          const { publish_date, title, slug } = node.frontmatter
          return (
            <div className="summary">
              <h1><a href={`/${slug}`}>{ title }</a></h1>
              <date>{ publish_date }</date>
            </div>
          )
        })
      }
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
query PublishedPages {
  allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}}) {
    nodes {
      id
      frontmatter {
        title
        slug
        publish_date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`
