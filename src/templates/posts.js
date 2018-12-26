import React from 'react'
import { graphql } from 'gatsby';

export default function Template({data}) {
  const { markdownRemark: post } = data
  const { title } = post.frontmatter
  return(
    <>
      <h3>{title}</h3>
    </>
  )
}

export const postQ = graphql`
  query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`