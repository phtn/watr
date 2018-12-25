import React from 'react'
import { graphql } from 'gatsby';

export default function Template({data}) {
  const { markdownRemark: post } = data
  return(
    <>
      <h3>{post.frontmatter.title}</h3>
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