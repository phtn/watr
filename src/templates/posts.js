import React from 'react'
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet'

const styles = {
  container: {
    // margin: 20,
    padding: 20,
    // fontFamily: ', sans-serif'
    textAlign: 'justify',
    fontSize: 20,
    color: '#333'
  },
  blogTitle: {
    fontFamily: 'Quicksand, sans-serif',
    color: '#555'
  }
}
export default function Template({data}) {
  const { markdownRemark: post } = data
  const { title, author } = post.frontmatter
  // console.log(typeof post)
  return(
    <div style={styles.container}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100" rel="stylesheet"/>
      </Helmet>
      <h1 style={styles.blogTitle}>{title}</h1>
      <p>{author}</p>
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
        author
      }
    }
  }
`