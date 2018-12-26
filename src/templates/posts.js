import React from 'react'
import { graphql } from 'gatsby';
const styles = {
  container: {
    // margin: 20,
    padding: 20,
    fontFamily: 'Roboto, sans-serif'
  },
  blogTitle: {
    fontFamily: 'Quicksand, sans-serif'
  }
}
export default function Template({data}) {
  const { markdownRemark: post } = data
  const { title } = post.frontmatter
  return(
    <div style={styles.container}>
      <h1 style={styles.blogTitle}>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}}></div>
    </div>
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