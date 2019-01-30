import React from "react";
import Layout from "../components/layout";
import BlogList from "../components/blog-list";
import Pitcher from "../assets/filter.svg";
import { graphql } from "gatsby";
import Helmet from 'react-helmet'

const Blog = ({ data, pad }) => {
  const { allMarkdownRemark: post } = data;

  return (
    <>
      <Helmet>
        <meta name="description" content="house water systems, filtration, purification"/>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100" rel="stylesheet"/>
      </Helmet>
      <Layout title="Blog">
        <BlogList
          items={post.edges}
          headerTitle={`Blogs`}
          title={""}
          buttonTitle={`Read More`}
          pad={pad}
          icon={Pitcher}
        />
      </Layout>
    </>
  );
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
`;
