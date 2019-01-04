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
  },
  headerContainer: {
    textAlign: 'center'
  },
  author: {
    textTransform: 'uppercase',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeight: 'bolder'
  },
  by: {
    fontSize: 12,
    fontFamily: 'serif',
    marginRight: 10
  }
}

const Header = ({}) => {
  return(
    <div style={styles.headerContainer}>
      <h1>
        Pure
      </h1>
      <hr/>
    </div>
  )
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
      <Header />
      <h1 style={styles.blogTitle}>{title}</h1>
      <p style={styles.author}><span style={styles.by}>by</span>{author}</p>
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