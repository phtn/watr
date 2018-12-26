import React from 'react'
import { graphql } from 'gatsby';

export default function Template({data}) {
  const { markdownRemark: post } = data
  console.log(post)
  const { title } = post.frontmatter
  return(
    <>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{__html: post.html}}></div>
    </>
  )
}

export const postQ = graphql`
  query PostListByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`