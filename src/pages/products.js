import React from "react";
import Layout from "../components/layout";
import ProductsList from "../components/blog-list.rc";
import Pitcher from "../assets/filter.svg";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

const Products = ({ data, pad }) => {
  const { allMarkdownRemark: post } = data;
  
  let arr = []
  for (let i = 0; i < post.totalCount; i++) {
    arr.push(post.edges[i])
    // post.edges[i].node.frontmatter.tag !== "BLOG" ? arr.push(post.edges[i].node.frontmatter) : null
  }
  console.log(arr.filter(item => item.node.frontmatter.tag === 'PRODUCT'))

  const newArr = arr.filter(item => item.node.frontmatter.tag === 'PRODUCT')
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
      <Layout title="Products">
        <ProductsList
          items={newArr}
          itemCount={post.totalCount}
          headerTitle={`Products`}
          title={""}
          buttonTitle={`Read More`}
          pad={pad}
          icon={Pitcher}
        />
      </Layout>
    </>
  );
};
export default Products;

export const getProducts = graphql`
  query ProductsList {
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
