import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../layouts/DefaultLayout'

export default function MdxPage({ data }) {
  const publish_date = data.markdownRemark.frontmatter.publish_date
  const html = data.markdownRemark.html
  return (
    <DefaultLayout>
      <date>Published on { publish_date }</date>
      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
query ($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      publish_date(formatString: "MMMM DD, YYYY")
    }
    html
  }
}
`
