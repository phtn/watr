import React from 'react'
import Layout from "../components/layout";
import BlogList from '../components/blog-list'
import Pitcher from '../assets/filter.svg'
import { graphql } from 'gatsby';

const Blog = ({data, pad}) => {
  const { allMarkdownRemark: post } = data
  // console.log(post.edges)
  return(
    <Layout title="Blog">
      <BlogList items={post.edges} headerTitle={`Blogs`} title={''} buttonTitle={`Read More`} pad={pad} icon={Pitcher} />
      {/* {
        post.edges.map( ({node}) => {
          <BlogList items={edges} headerTitle={`Blogs`} buttonTitle={`Read More`} pad={pad} icon={Pitcher} />
        }) 
      } */}
      
      {/* <BlogList headerTitle={`Blogs`} buttonTitle={`Read More`} pad={pad}/> */}
      {/* test */}
    </Layout>
  )
};
export default Blog;

export const getBlogs = graphql`
  query BlogPosts {
    allMarkdownRemark( 
      sort: { fields: [frontmatter___id], order: DESC }
      limit: 5
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            author
            createdAt
            description
            avatar
            readTime
            updatedAt
            source
            id
          }
        }
      }
    }
  }
`