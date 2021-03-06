import React from "react";
import Layout from "../components/layout";
import BlogList from "../components/blog-list.rc";
import Pitcher from "../assets/filter.svg";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

const Blog = ({ data, pad }) => {
  const { allMarkdownRemark: post } = data;

 


  const arr = [...post.edges]
  const newArr = arr.filter(item => item.node.frontmatter.tag === "BLOG");

  // console.log("newArr", newArr)
  // console.log("oldArr", post.edges)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700i|Quicksand|Roboto:100"
          rel="stylesheet"
        />
      </Helmet>
      <Layout title="Blog">
        <BlogList
          items={newArr}
          itemCount={post.totalCount}
          headerTitle={`Blogs`}
          title={"Blog"}
          buttonTitle={`Read More`}
          pad={pad}
          icon={Pitcher}
        />
      </Layout>
    </>
  );
};
export default Blog;

// IN DESC ORDER
export const getBlogs = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: { fields: [frontmatter___id]}
      limit: 100
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
            readTime
            updatedAt
            source
            id
            tag
          }
        }
      }
    }
  }
`;
